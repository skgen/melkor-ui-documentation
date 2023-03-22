import {
  computed,
  ref,
} from 'vue';

type UseMockListParams = {
  page?: number;
  pageMin?: number;
  pageMax?: number;
  step?: number;
  delta?: number;
};

const defaultParams: Required<UseMockListParams> = {
  page: 0,
  pageMin: 0,
  pageMax: 9,
  step: 10,
  delta: 500,
};

enum ListPushDirection {
  before,
  after,
}

export default (params: UseMockListParams = { ...defaultParams }) => {
  const computedParams = {
    ...defaultParams,
    ...params,
  };

  if (computedParams.page > computedParams.pageMax || computedParams.page < computedParams.pageMin) {
    throw new Error('Provide a page between pageMin & pageMax');
  }

  function getSteps() {
    return Array(computedParams.step).fill(null);
  }

  const loading = ref(false);

  function generateItems(page: number) {
    const from = page * computedParams.step;
    const base = getSteps();
    const mapped = base.map((_, key) => from + key);
    return mapped;
  }

  function getPageOf(item: number) {
    return Math.floor(item / computedParams.step);
  }

  const list = ref([...generateItems(computedParams.page)]);

  const canPreprend = computed(() => list.value[0] > computedParams.pageMin * computedParams.step);
  const canAppend = computed(() => list.value[list.value.length - 1] < computedParams.pageMax * computedParams.step + computedParams.step - 1);
  const range = computed<[number, number]>(() => [getPageOf(list.value[0]), getPageOf(list.value[list.value.length - 1])]);

  function addItems(direction: ListPushDirection): Promise<void> {
    loading.value = true;
    return new Promise((resolve) => {
      setTimeout(() => {
        if (direction === ListPushDirection.before) {
          if (canPreprend.value) {
            list.value = [...generateItems(getPageOf(list.value[0]) - 1), ...list.value];
          }
        } else if (canAppend.value) {
          list.value = [...list.value, ...generateItems(getPageOf(list.value[list.value.length - 1]) + 1)];
        }
        loading.value = false;
        resolve();
      }, computedParams.delta);
    });
  }

  function reset() {
    loading.value = true;
    setTimeout(() => {
      list.value = getSteps().map((_, key) => key);
      loading.value = false;
    }, computedParams.delta);
  }

  function preprend() {
    if (canPreprend.value) {
      addItems(ListPushDirection.before);
    }
  }

  function append() {
    if (canAppend.value) {
      addItems(ListPushDirection.after);
    }
  }

  return {
    list,
    loading,
    canPreprend,
    canAppend,
    range,
    preprend,
    append,
    reset,
  };
};

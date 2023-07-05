<template>
  <section>
    <h2>Async loading on search <small>(concrete example)</small></h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppDemoBlock>
        <div style="display: flex;">
          <mk-input-select-x
            v-model="state"
            v-model:search="search"
            :options="options"
          >
            <template #values="{ selection }">
              <template v-if="!loaded && !loading">
                Search something to load data
              </template>
              <template v-else-if="!loaded && loading">
                Loading ...
              </template>
              <template v-else>
                {{ selection.map((entry: Character ) => entry.name).join(', ') }}
              </template>
            </template>
            <template #option-label="{ option }">
              {{ option.value.name }}
            </template>
            <template #options-empty>
              <template v-if="!loaded && loading">
                Loading ...
              </template>
              <template v-else>
                No result yet
              </template>
            </template>
            <template #options-header>
              <template v-if="loaded && loading">
                <mk-menu-entry>
                  <small><em>Loading new options ...</em></small>
                </mk-menu-entry>
              </template>
            </template>
          </mk-input-select-x>
        </div>
      </AppDemoBlock>
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-select-x/async-search.vue.hbs"
        :language="CodeLanguage.vue"
      />
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-select-x/async-search.ts.hbs"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import debounce from 'lodash/debounce';
import {
  createInputState,
  validateInputState,
  type InputState,
  type TextInputValue,
  type SelectXInputOption,
} from '@patriarche/melkor';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import { CodeLanguage } from '@/lib/definition';

type Character = {
  id: string;
  name: string;
  race: 'ainur' | 'elf';
};

// Api call simulation

async function getCharacters(search?: string): Promise<Character[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: Character[] = [
        { id: 'mel', name: 'Melkor', race: 'ainur' },
        { id: 'cel', name: 'Celebrimbor', race: 'elf' },
        { id: 'man', name: 'Manwë', race: 'ainur' },
        { id: 'glo', name: 'Glorfindel', race: 'elf' },
      ];
      if (!search) {
        resolve(data);
        return;
      }
      const filtered = data.filter((character) => character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
      resolve(filtered);
    }, 1000);
  });
}

// Input Logic

type SelectXInputOptionValue = Character | null;
type SelectXInputValue = SelectXInputOptionValue[];

const characterIdsFromProps = ['mel', 'man'];
const characters = ref<Character[]>([]);
const loading = ref(false);
const loaded = ref(false);

const options = computed<SelectXInputOption<SelectXInputOptionValue>[]>(
  () => characters.value
    .map((character) => ({
      value: character,
    })),
);

const state = ref<InputState<SelectXInputValue>>(
  createInputState({
    value: [],
  }),
);

const search = ref<InputState<TextInputValue>>(
  createInputState({
    value: null,
  }),
);

async function fetchCharacters() {
  loading.value = true;
  const data = await getCharacters(search.value.value ?? undefined);
  loading.value = false;
  return data;
}

// We use Lodash debounce to prevent from spamming fetch
// This is for demo, in production you should also cancel pending requests before fetching again
const debouncedFetchCharacters = debounce(async () => {
  characters.value = await fetchCharacters();
  if (!loaded.value) {
    loaded.value = true;
  }
}, 300);

watch(search, (newSearch, oldSearch) => {
  // We fetch data for the first time
  const firstTimeFetch = !loaded.value;
  // When search changes
  const focusedAndSearchChanged = oldSearch.value !== newSearch.value;

  if (firstTimeFetch || focusedAndSearchChanged) {
    debouncedFetchCharacters();
  }
});

// When loaded we map our ids to the state thanks to the fetched data
watch(loaded, () => {
  state.value = validateInputState({
    ...state.value,
    value: characters.value.filter((character) => characterIdsFromProps.includes(character.id)),
  });
});

</script>

<style lang="scss">
.pux-InputSelectXViewCollection {
    &-tile {
        display: flex;
        gap: var(--app-m-1);
        align-items: center;
        padding-left: calc(var(--app-m-1) / 2);
        overflow: hidden;
        background-color: rgb(var(--app-primary-tone-color) / 0.2);
        border: 1px solid var(--app-primary-color);
        border-radius: var(--app-border-radius);

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            padding: 0;
            cursor: pointer;
            transition: background-color var(--app-transition-duration-background);

            &:hover {
                background-color: rgb(var(--app-primary-tone-color) / 0.2);
            }
        }
    }
}
</style>

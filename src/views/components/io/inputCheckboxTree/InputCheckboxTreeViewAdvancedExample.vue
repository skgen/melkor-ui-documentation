<template>
  <section>
    <h2>Advanced example</h2>
    <div>
      <AppSandboxPreview
        template="/code/view/components/io/input-checkbox-tree/advanced/template.hbs"
        script="/code/view/components/io/input-checkbox-tree/advanced/script.hbs"
        :script-variables="{
          minCount,
          errors: {
            global: $t('view.inputCheckboxTree.errors.global'),
            maiar: $t('view.inputCheckboxTree.errors.maiar'),
          }
        }"
      >
        <mk-input-checkbox-tree
          v-model="advancedState"
          label="Characters"
          :hint="`Let's pick at least ${minCount} Maiars`"
        />
      </AppSandboxPreview>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import {
  type CheckboxTreeInputValue,
  type InputState,
  createInputState,
  isEmpty,
  validateInputState,
  exportCheckboxTreeLevelErrorsAsArray,
  findCheckboxTreeLevel,
  countCheckedCheckboxTreeLevels,
} from '@patriarche/melkor';
import { useI18n } from 'vue-i18n';
import isEqual from 'lodash/isEqual';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';

const { t } = useI18n();

const checked = true;
const unchecked = false;
const minCount = 3;

type InputValue = CheckboxTreeInputValue<typeof checked, typeof unchecked>;

function validateGandalf(value: typeof checked | typeof unchecked) {
  return value === true ? null : t('view.inputCheckboxTree.errors.gandalf');
}

function validateSauron(value: typeof checked | typeof unchecked) {
  return value === false ? null : t('view.inputCheckboxTree.errors.sauron');
}

const advancedState = ref<InputState<InputValue>>(
  createInputState({
    value: [
      {
        input: {
          state: createInputState({ value: false }),
          options: {
            checkedLabel: 'Maiar',
            checked,
            unchecked,
            name: 'maiar',
          },
        },
        children: [
          {
            input: {
              state: createInputState({ value: false }),
              options: {
                checkedLabel: 'Istari',
                checked,
                unchecked,
                name: 'istari',
              },
            },
            children: [
              {
                input: {
                  state: createInputState({ value: true }),
                  options: {
                    checkedLabel: 'Gandalf',
                    checked,
                    unchecked,
                    validate: validateGandalf,
                    name: 'gandalf',
                  },
                },
              },
              {
                input: {
                  state: createInputState({ value: false }),
                  options: {
                    checkedLabel: 'Saruman',
                    checked,
                    unchecked,
                    name: 'saruman',
                  },
                },
              },
              {
                input: {
                  state: createInputState({ value: true }),
                  options: {
                    checkedLabel: 'Radagast',
                    checked,
                    unchecked,
                    name: 'radagast',
                  },
                },
              },
            ],
          },
          {
            input: {
              state: createInputState({ value: false }),
              options: {
                checkedLabel: 'Sauron',
                checked,
                unchecked,
                validate: validateSauron,
                name: 'sauron',
              },
            },
          },
          {
            input: {
              state: createInputState({ value: true }),
              options: {
                checkedLabel: 'Eönwë',
                checked,
                unchecked,
                name: 'eonwe',
              },
            },
          },
        ],
      },
    ],
  }),
);

watch(advancedState, (newState, prevState) => {
  let localState = { ...newState };

  if (isEqual(localState, prevState)) {
    return;
  }

  const level = findCheckboxTreeLevel(localState.value, 'maiar');
  if (level?.children) {
    const checkedCount = countCheckedCheckboxTreeLevels(level.children);

    level.input.state = validateInputState(level.input.state, () => {
      if (checkedCount < minCount) {
        return t('view.inputCheckboxTree.errors.maiar');
      }
      return null;
    });
  }

  localState = validateInputState(localState, (value) => {
    const errors = exportCheckboxTreeLevelErrorsAsArray(value);
    if (!isEmpty(errors)) {
      return t('view.inputCheckboxTree.errors.global');
    }
    return null;
  });

  advancedState.value = localState;
});
</script>

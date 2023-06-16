<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <div class="pux-InputCheckboxTreeViewPlayground-ctas">
        <AppInputStatePreview :state="state" />
        <AppInputStatePreview :state="exportCheckboxTreeLevelStates(state.value)">
          {{ $t('view.inputCheckboxTree.ctas.viewValueAsStates') }}
        </AppInputStatePreview>
        <AppInputStatePreview :state="exportCheckboxTreeLevelValues(state.value)">
          {{ $t('view.inputCheckboxTree.ctas.viewValueAsValues') }}
        </AppInputStatePreview>
      </div>
    </div>
    <div>
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/io/input-checkbox-tree/template.hbs"
        script="/code/view/components/io/input-checkbox-tree/script.hbs"
        :script-variables="{
          errors: {
            global: $t('view.inputCheckboxTree.errors.global'),
            gandalf: $t('view.inputCheckboxTree.errors.gandalf'),
            sauron: $t('view.inputCheckboxTree.errors.sauron'),
            maiar: $t('view.inputCheckboxTree.errors.maiar'),
          }
        }"
        @change="handlePreviewChange"
      >
        <mk-input-checkbox-tree
          v-model="state"
          v-bind="attributes.props"
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
  exportCheckboxTreeLevelStates,
  exportCheckboxTreeLevelValues,
  exportCheckboxTreeLevelErrorsAsArray,
  findCheckboxTreeLevel,
  countCheckedCheckboxTreeLevels,
} from '@patriarche/melkor';
import { useI18n } from 'vue-i18n';
import isEqual from 'lodash/isEqual';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';
import { mapSandboxAttributesWithoutInputState } from '@/lib/utils';

const { t } = useI18n();

const checked = true;
const unchecked = false;
const minCount = 3;

type InputValue = CheckboxTreeInputValue<typeof checked, typeof unchecked>;

function validate(value: InputValue) {
  const errors = exportCheckboxTreeLevelErrorsAsArray(value);
  if (!isEmpty(errors)) {
    return t('view.inputCheckboxTree.errors.global');
  }
  return null;
}

function validateGandalf(value: typeof checked | typeof unchecked) {
  return value === true ? null : t('view.inputCheckboxTree.errors.gandalf');
}

function validateSauron(value: typeof checked | typeof unchecked) {
  return value === false ? null : t('view.inputCheckboxTree.errors.sauron');
}

const state = ref<InputState<InputValue>>(
  createInputState({
    value: [
      {
        input: {
          state: createInputState({ value: true }),
          options: {
            checkedLabel: 'Melkor',
            checked,
            unchecked,
            name: 'melkor',
          },
        },
      },
      {
        input: {
          state: createInputState({ value: false }),
          options: {
            checkedLabel: 'Manwë',
            checked,
            unchecked,
            name: 'manwe',
          },
        },
      },
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
                  state: createInputState({ value: false }),
                  options: {
                    checkedLabel: 'Radagast',
                    checked,
                    unchecked,
                    name: 'radagast',
                  },
                },
              },
              {
                input: {
                  state: createInputState({ value: false }),
                  options: {
                    checkedLabel: 'Blue Wizards',
                    checked,
                    unchecked,
                    name: 'blue-wizards',
                  },
                },
                children: [
                  {
                    input: {
                      state: createInputState({ value: true }),
                      options: {
                        checkedLabel: 'Alatar',
                        checked,
                        unchecked,
                        name: 'alatar',
                      },
                    },
                  },
                  {
                    input: {
                      state: createInputState({ value: false }),
                      options: {
                        checkedLabel: 'Pallando',
                        checked,
                        unchecked,
                        name: 'pallando',
                      },
                    },
                  },
                ],
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

const definition: ComponentDefinition = {
  props: {
    state: {
      type: AttributeType.vModel,
      required: true,
      default: state.value,
    },
    validate: {
      type: AttributeType.reference,
      required: false,
      default: validate,
    },
    name: {
      type: AttributeType.string,
      required: false,
      default: 'checkbox-tree',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Characters',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: 'Pick the best team you can',
    },
    disabled: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = mapSandboxAttributesWithoutInputState(newAttributes);
}

</script>

<style lang="scss">
.pux-InputCheckboxTreeViewPlayground {
    &-ctas {
        display: flex;
        gap: var(--app-m-1);
        align-items: center;
    }
}
</style>

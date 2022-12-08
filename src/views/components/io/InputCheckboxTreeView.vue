<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-checkbox-tree"
      :state="state"
    >
      <template #ctas>
        <mk-button @click="() => { stateAsStatesModal = !stateAsStatesModal; }">
          {{ $t('view.inputCheckboxTree.ctas.viewValueAsStates') }}
        </mk-button>
        <mk-button @click="() => { stateAsValuesModal = !stateAsValuesModal; }">
          {{ $t('view.inputCheckboxTree.ctas.viewValueAsValues') }}
        </mk-button>
        <mk-fullscreen-modal
          v-model="stateAsStatesModal"
          center
        >
          <template #transition="{ active }">
            <transition name="view-fade">
              <AppCodeBlock
                v-if="active"
                :code="JSON.stringify(exportCheckboxTreeLevelStates(state.value), null, 2)"
                :language="CodeLanguage.json"
              />
            </transition>
          </template>
        </mk-fullscreen-modal>
        <mk-fullscreen-modal
          v-model="stateAsValuesModal"
          center
        >
          <template #transition="{ active }">
            <transition name="view-fade">
              <AppCodeBlock
                v-if="active"
                :code="JSON.stringify(exportCheckboxTreeLevelValues(state.value), null, 2)"
                :language="CodeLanguage.json"
              />
            </transition>
          </template>
        </mk-fullscreen-modal>
      </template>
    </AppInputTitlePreview>

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

    <mk-wysiwyg-preview>
      <h2>Focus on basic error handling</h2>
      <p>
        Every level input in the tree can render a classic error, the same way as any other input in the library.
        It's nothing more but a classic input !
      </p>
      <p>
        <AppAsyncCodeBlock
          file-path="/code/view/components/io/input-checkbox-tree/errors.hbs"
          :language="CodeLanguage.typescript"
          :variables="{
            errors: {
              global: $t('view.inputCheckboxTree.errors.global'),
              gandalf: $t('view.inputCheckboxTree.errors.gandalf'),
              sauron: $t('view.inputCheckboxTree.errors.sauron'),
            }
          }"
        />
      </p>
    </mk-wysiwyg-preview>

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
      <template #title>
        Advanced example
      </template>
      <mk-input-checkbox-tree
        v-model="advancedState"
        label="Characters"
        :hint="`Let's pick at least ${minCount} Maiars`"
      />
    </AppSandboxPreview>

    <mk-wysiwyg-preview>
      <h2>
        Focus on advanced error handling
      </h2>
      <p>
        If you want to generate a computed error on any tree level or the input itself,
        based on the global state, you can do it with a simple watcher on the global state.
        <br>
        It is achieved in 4 steps here:
      </p>
      <p>
        <ol>
          <li>Find the level you want to target the children with <code>findCheckboxTreeLevel</code></li>
          <li>Count how many children are actually checked with <code>countCheckedCheckboxTreeLevels</code></li>
          <li>Revalidate the state of the level you want to put the computed error on with <code>validateInputState</code></li>
          <li><strong>Revalidate the state of the input</strong> with <code>validateInputState</code></li>
        </ol>
      </p>
      <blockquote>
        Don't forget to validate the input state with <code>validateInputState</code>
        because it also calculates other state properties, like <code>valid</code> property for example
      </blockquote>
      <p>
        <AppAsyncCodeBlock
          file-path="/code/view/components/io/input-checkbox-tree/advanced/errors.hbs"
          :language="CodeLanguage.typescript"
          :variables="{
            minCount,
            errors: {
              global: $t('view.inputCheckboxTree.errors.global'),
              maiar: $t('view.inputCheckboxTree.errors.maiar'),
            }
          }"
        />
      </p>
      <p>
        <mk-alert warning>
          Don't mix a basic & an advanced error handling on the same tree level or the input,
          it would result in an override of the basic error handling by the advanced one (as the watcher is always called last)
        </mk-alert>
      </p>
      <p>
        <mk-alert warning>
          If you use advanced error handling on any tree level, use advanced error handling on input too,
          it would otherwise end up in an out of sync error state on input.
        </mk-alert>
      </p>
      <p>
        Example of an out of sync sequence with input basic error handling instead of advanced one:
      </p>
      <p>
        <ol>
          <li><code>maiar</code> validation with basic error handling throught its validate option (detects an error)</li>
          <li><code>input</code> validation with basic error handling throught its validate option (detects an error because of step 1)</li>
          <li>
            <code>maiar</code> validation with advanced error handling through the watcher
            (detects no error because of different test than step 1 and doesn't pick up old error)
          </li>
          <li>
            <code>input</code> state error is still on step 2 and out of sync
            <br>
            <code>input</code> has an error even tho none of the tree level has anymore.
            <br>
            <code>input</code> is <i>out of sync</i> with tree levels
          </li>
        </ol>
      </p>
      <blockquote>
        The out of sync example above doesn't mean that it's impossible/bad to handle the error exclusively on the <code>input</code>.
        <br>
        To handle it exclusively on the <code>input</code>, you can use both basic or advanced error handling.
      </blockquote>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <h2>
        Utilities
      </h2>
      <p>
        <code>countCheckboxTreeLevels</code> :
        Counts how many TreeLevels exists in the collection
      </p>
      <p>
        <code>countCheckedCheckboxTreeLevels</code> :
        Counts how many TreeLevels are checked in the collection
      </p>
      <p>
        <code>countUncheckedCheckboxTreeLevels</code> :
        Counts how many TreeLevels are unchecked in the collection
      </p>
      <p>
        <code>exportCheckboxTreeLevelData</code> :
        Exports data in a flat literal object, from every tree level, in the format specified by the callback
      </p>
      <p>
        <code>exportCheckboxTreeLevelErrors</code> :
        Exports errors in a flat literal object, from every tree level, as string
      </p>
      <p>
        <code>exportCheckboxTreeLevelErrorsAsArray</code> :
        Exports errors in an array, from every tree level, as string
      </p>
      <p>
        <code>exportCheckboxTreeLevelStates</code> :
        Exports data in a flat literal object, from every tree level, as state
      </p>
      <p>
        <code>exportCheckboxTreeLevelValues</code> :
        Exports data in a flat literal object, from every tree level, as value
      </p>
      <p>
        <code>findCheckboxTreeLevel</code> :
        Finds tree level which <code>input.options.name</code> matches the one specified
      </p>
      <p>
        <code>isAllCheckboxTreeLevelsChecked</code> :
        Returns <code>true</code> if all tree levels are checked
      </p>
      <p>
        <code>isAllCheckboxTreeLevelsUnchecked</code> :
        Returns <code>true</code> if all tree levels are unchecked
      </p>
      <p>
        <code>isSomeCheckboxTreeLevelsChecked</code> :
        Returns <code>true</code> if at least 1 tree level is checked
      </p>
      <p>
        <code>isSomeCheckboxTreeLevelsUnchecked</code>
        Returns <code>true</code> if at least 1 tree level is unchecked
      </p>
      <p>
        <code>checkAllCheckboxTreeLevels</code>
        Update value of every tree levels, based on their own <code>input.options.checked</code>
      </p>
      <p>
        <code>uncheckAllCheckboxTreeLevels</code>
        Update value of every tree levels, based on their own <code>input.options.unchecked</code>
      </p>
    </mk-wysiwyg-preview>
  </div>
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
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentDefinition, type ComponentAttributes,
  CodeLanguage,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { mapSandboxAttributesWithoutInputState } from '@/lib/utils';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';

const stateAsStatesModal = ref(false);
const stateAsValuesModal = ref(false);
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
                    name: 'blue wizards',
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

watch(advancedState, (newState) => {
  const level = findCheckboxTreeLevel(newState.value, 'maiar');
  const checkedCount = countCheckedCheckboxTreeLevels(level.children);

  level.input.state = validateInputState(level.input.state, () => {
    if (checkedCount < minCount) {
      return t('view.inputCheckboxTree.errors.maiar');
    }
    return null;
  });

  advancedState.value = validateInputState(advancedState.value, (value) => {
    const errors = exportCheckboxTreeLevelErrorsAsArray(value);
    if (!isEmpty(errors)) {
      return t('view.inputCheckboxTree.errors.global');
    }
    return null;
  });
});

const definition: ComponentDefinition = {
  props: {
    state: {
      type: AttributeType.vModel,
      required: true,
      default: state,
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

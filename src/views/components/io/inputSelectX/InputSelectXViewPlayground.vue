<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppSandboxPreview
        ref="sandbox"
        :definition="definition"
        template="/code/view/components/io/input-select-x/playground.vue.hbs"
        scss="/code/view/components/io/input-select-x/playground.scss.hbs"
        script="/code/view/components/io/input-select-x/playground.ts.hbs"
        @change="handlePreviewChange"
        @change:slots="handleSlotsChange"
      >
        <template #default="{ style }">
          <mk-input-select-x
            v-if="playgroundReady"
            v-model="state"
            v-model:search="search"
            v-bind="attributes.props"
            :style="style"
          >
            <template
              v-if="attributes.slots['value']"
              #value="{ selection }"
            >
              <strong>
                {{ selection }}
              </strong>
            </template>
            <template
              v-if="attributes.slots['option']"
              #option="{ option, selected, index }"
            >
              <strong>#{{ index }}</strong>
              <span>{{ option.value }}</span>
              <template v-if="selected">
                <mk-icon icon="arrow_back" />
              </template>
            </template>
            <template
              v-if="attributes.slots['option-label']"
              #option-label="{ option }"
            >
              <em>{{ option.value }}</em>
            </template>
            <template
              v-if="attributes.slots['option-icon']"
              #option-icon="{ selected }"
            >
              <mk-radio :checked="selected" />
            </template>
            <template
              v-if="attributes.slots['options-empty']"
              #options-empty
            >
              <strong>There is no option to select !</strong>
            </template>
            <template
              v-if="attributes.slots['options-header']"
              #options-header
            >
              <mk-menu-entry v-if="search.value">
                <mk-wysiwyg-preview>
                  <em>Current results for <strong>{{ search.value }}</strong> :</em>
                </mk-wysiwyg-preview>
              </mk-menu-entry>
            </template>
            <template
              v-if="attributes.slots['options-footer']"
              #options-footer
            >
              <mk-menu-entry>
                <mk-button outlined>
                  Add an option <mk-icon icon="add" />
                </mk-button>
              </mk-menu-entry>
            </template>
          </mk-input-select-x>
        </template>
      </AppSandboxPreview>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  createInputState,
  type InputState,
  type SelectXInputOption,
  type TextInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type Attributes, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import {
  createScssControllersConfig,
  createSlotsControllersConfig,
  mapSandboxAttributesWithoutPropsKeys,
} from '@/lib/utils';

const playgroundReady = ref(false);
const sandbox = ref<typeof AppSandboxPreview | null>(null);

type SelectXInputValue = string;

function validate(value: SelectXInputValue) {
  return value === 'Glorfindel' ? 'You can\'t select Glorfindel' : null;
}

const options: SelectXInputOption<SelectXInputValue>[] = [
  { value: 'Melkor' },
  { value: 'Celebrimbor' },
  { value: 'Manwë', disabled: true },
  { value: 'Glorfindel' },
];

const state = ref<InputState<SelectXInputValue>>(
  createInputState({
    value: options[1].value,
  }),
);

const search = ref<InputState<TextInputValue>>(
  createInputState({
    value: null,
  }),
);

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
      default: 'select-x',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input select X',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a select X input",
    },
    disabled: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    options: {
      type: AttributeType.reference,
      required: true,
      default: options,
    },
    cancelable: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    search: {
      type: AttributeType.vModelKey,
      required: false,
      default: search.value,
    },
    hideSearchOnBlur: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    cancelSearchOnBlur: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-select-x-background-color',
    '--mk-input-select-x-border-color',
    '--mk-input-select-x-border-radius',
    '--mk-input-select-x-border-width',
    '--mk-input-select-x-color',
    '--mk-input-select-x-font-size',
    '--mk-input-select-x-icon-size',
    '--mk-input-select-x-line-height',
    '--mk-input-select-x-option-icon-size',
    '--mk-input-select-x-padding-x',
    '--mk-input-select-x-padding-y',
    '--mk-input-select-x-search-color',
    '--mk-input-select-x-spacing',
  ]),
  slots: createSlotsControllersConfig([
    'value',
    ['values', {
      inputOptions: {
        disabled: true,
        hint: 'For multi value custom slot, check examples below',
      },
    }],
    'option',
    'option-label',
    'option-icon',
    'options-empty',
    'options-header',
    'options-footer',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handleSlotsChange(newSlots: Attributes, oldSlots: Attributes) {
  if (!sandbox.value) {
    return;
  }
  if (newSlots.option && !oldSlots.option) {
    if (newSlots['option-icon']) {
      sandbox.value.slotsControllers['option-icon'].input.value = false;
    }
    if (newSlots['option-label']) {
      sandbox.value.slotsControllers['option-label'].input.value = false;
    }
  }
  if (newSlots['option-icon'] && !oldSlots['option-icon']) {
    sandbox.value.slotsControllers.option.input.value = false;
  }
  if (newSlots['option-label'] && !oldSlots['option-label']) {
    sandbox.value.slotsControllers.option.input.value = false;
  }
}

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = mapSandboxAttributesWithoutPropsKeys(newAttributes, ['state', 'search']);
  playgroundReady.value = true;
}

</script>

<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/io/input-number/playground.vue.hbs"
        scss="/code/view/components/io/input-number/playground.scss.hbs"
        script="/code/view/components/io/input-number/playground.ts.hbs"
        @change="handlePreviewChange"
      >
        <template #default="{ style }">
          <mk-input-number
            v-model="state"
            v-bind="attributes.props"
            :style="style"
          >
            <template
              v-if="attributes.slots['leading-icon']"
              #leading-icon
            >
              <mk-icon icon="barcode_scanner" />
            </template>
            <template
              v-if="attributes.slots['trailing-icon']"
              #trailing-icon
            >
              <mk-icon icon="euro" />
            </template>
            <template
              v-if="attributes.slots['cancel']"
              #cancel
            >
              <mk-icon icon="delete_forever" />
            </template>
          </mk-input-number>
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
  type NumberInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: NumberInputValue) {
  if (value === null) {
    return 'Required';
  }
  return value <= 5 ? 'Value must be more than 5' : null;
}

const state = ref<InputState<NumberInputValue>>(createInputState({
  value: 10,
  focused: true,
}));

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
      default: 'number',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input number',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a number input",
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
    placeholder: {
      type: AttributeType.string,
      required: false,
      default: '1337',
    },
    cancelable: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    min: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
    max: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
    step: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-number-background-color',
    '--mk-input-number-border-color',
    '--mk-input-number-border-radius',
    '--mk-input-number-border-width',
    '--mk-input-number-color',
    '--mk-input-number-font-size',
    '--mk-input-number-line-height',
    '--mk-input-number-icon-color',
    '--mk-input-number-icon-size',
    '--mk-input-number-padding-x',
    '--mk-input-number-padding-y',
    '--mk-input-number-placeholder-color',
    '--mk-input-number-spacing',
  ]),
  slots: createSlotsControllersConfig([
    'leading-icon',
    'trailing-icon',
    'cancel',
  ]),
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

<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/io/input-text/playground.vue.hbs"
        scss="/code/view/components/io/input-text/playground.scss.hbs"
        script="/code/view/components/io/input-text/playground.ts.hbs"
        @change="handlePreviewChange"
      >
        <template #default="{ style }">
          <mk-input-text
            v-bind="attributes.props"
            v-model="state"
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
          </mk-input-text>
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
  type TextInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: TextInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<TextInputValue>>(createInputState({
  value: 'Hello world',
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
      default: 'text',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input text',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a text input",
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
      default: 'Melkor',
    },
    cancelable: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-text-background-color',
    '--mk-input-text-border-color',
    '--mk-input-text-border-radius',
    '--mk-input-text-border-width',
    '--mk-input-text-color',
    '--mk-input-text-font-size',
    '--mk-input-text-line-height',
    '--mk-input-text-icon-color',
    '--mk-input-text-icon-size',
    '--mk-input-text-padding-x',
    '--mk-input-text-padding-y',
    '--mk-input-text-placeholder-color',
    '--mk-input-text-spacing',
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

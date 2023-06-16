<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/io/input-color/playground.vue.hbs"
        scss="/code/view/components/io/input-color/playground.scss.hbs"
        script="/code/view/components/io/input-color/playground.ts.hbs"
        @change="handlePreviewChange"
      >
        <template #default="{ style }">
          <mk-input-color
            v-model="state"
            v-bind="attributes.props"
            :style="style"
          >
            <template
              v-if="attributes.slots.icon"
              #icon
            >
              <mk-icon icon="invert_colors" />
            </template>
          </mk-input-color>
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
  type ColorInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: ColorInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<ColorInputValue>>(createInputState({
  value: '#ff0000',
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
      default: '#ff0000',
    },
    cancelable: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-color-background-color',
    '--mk-input-color-border-color',
    '--mk-input-color-border-radius',
    '--mk-input-color-border-width',
    '--mk-input-color-color',
    '--mk-input-color-font-size',
    '--mk-input-color-line-height',
    '--mk-input-color-icon-color',
    '--mk-input-color-icon-size',
    '--mk-input-color-padding-x',
    '--mk-input-color-padding-y',
    '--mk-input-color-placeholder-color',
    '--mk-input-color-spacing:',
  ]),
  slots: createSlotsControllersConfig([
    'icon',
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

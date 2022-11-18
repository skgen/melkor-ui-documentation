<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-text"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-text/template.txt"
      scss="/code/view/component/io/input-text/scss.txt"
      script="/code/view/component/io/input-text/script.txt"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-text
          v-model="state"
          v-bind="attributes.props"
          :style="style"
        />
      </template>
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  createInputState,
  type InputState,
  type TextInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig } from '@/lib/utils';

function validate(value: TextInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<TextInputValue>>(createInputState({
  value: 'Hello world',
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
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-text-padding-x',
    '--mk-input-text-padding-y',
    '--mk-input-text-border-radius',
    '--mk-input-text-background-color',
    '--mk-input-text-border-color',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  const newProps = newAttributes.props;
  const { state: newState, ...otherProps } = newProps;
  attributes.value = {
    scss: newAttributes.scss,
    props: otherProps,
  };
}

</script>

<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-textarea"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-textarea/template.txt"
      scss="/code/view/component/io/input-textarea/scss.txt"
      script="/code/view/component/io/input-textarea/script.txt"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-textarea
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
  type TextareaInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig } from '@/lib/utils';

function validate(value: TextareaInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<TextareaInputValue>>(createInputState({
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
      default: 'textarea',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input textarea',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a textarea input",
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    rows: {
      type: AttributeType.number,
      required: false,
      default: 2,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-textarea-padding-x',
    '--mk-input-textarea-padding-y',
    '--mk-input-textarea-border-radius',
    '--mk-input-textarea-background-color',
    '--mk-input-textarea-border-color',
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

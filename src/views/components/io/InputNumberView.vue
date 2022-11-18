<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-number"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-number/template.txt"
      scss="/code/view/component/io/input-number/scss.txt"
      script="/code/view/component/io/input-number/script.txt"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-number
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
  type NumberInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig } from '@/lib/utils';

function validate(value: NumberInputValue) {
  if (value === null) {
    return 'Required';
  }
  return value <= 5 ? 'Value must be more than 5' : null;
}

const state = ref<InputState<NumberInputValue>>(createInputState({
  value: 10,
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
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-number-padding-x',
    '--mk-input-number-padding-y',
    '--mk-input-number-border-radius',
    '--mk-input-number-background-color',
    '--mk-input-number-border-color',
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

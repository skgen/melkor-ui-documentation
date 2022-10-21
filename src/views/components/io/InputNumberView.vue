<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-number"
      :state="inputState"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-number/template.txt"
      @change="handlePreviewChange"
    >
      <mk-input-number
        v-model="inputState"
        v-bind="attributes.props"
      />
      <template #code-after>
        <AppAsyncCodeBlock
          file-path="/code/view/component/io/input-number/script.txt"
          :language="CodeLanguage.typescript"
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
  AttributeType, CodeLanguage, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

function validate(value: NumberInputValue) {
  if (value === null) {
    return 'Required';
  }
  return value <= 5 ? 'Value must be more than 5' : null;
}

const inputState = ref<InputState<NumberInputValue>>(createInputState({
  value: 10,
}));

const definition: ComponentDefinition = {
  props: {
    state: {
      type: AttributeType.vModel,
      required: true,
      default: inputState.value,
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
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  const newProps = newAttributes.props;
  const { state, ...otherProps } = newProps;
  attributes.value = {
    scss: newAttributes.scss,
    props: otherProps,
  };
}

</script>

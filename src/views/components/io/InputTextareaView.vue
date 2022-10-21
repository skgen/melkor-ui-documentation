<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-textarea"
      :state="inputState"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-textarea/template.txt"
      @change="handlePreviewChange"
    >
      <mk-input-textarea
        v-model="inputState"
        v-bind="attributes.props"
      />
      <template #code-after>
        <AppAsyncCodeBlock
          file-path="/code/view/component/io/input-textarea/script.txt"
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
  type TextareaInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, CodeLanguage, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

function validate(value: TextareaInputValue) {
  return value === null ? 'Required' : null;
}

const inputState = ref<InputState<TextareaInputValue>>(createInputState({
  value: 'Hello world',
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

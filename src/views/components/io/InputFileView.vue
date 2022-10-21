<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-file"
      :state="inputState"
    />

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-file/template.txt"
      @change="handlePreviewChange"
    >
      <mk-input-file
        v-model="inputState"
        v-bind="attributes.props"
      />
      <template #code-after>
        <AppAsyncCodeBlock
          file-path="/code/view/component/io/input-file/script.txt"
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
  type FileInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, CodeLanguage, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

function validate(value: FileInputValue) {
  return value.length <= 0 ? 'Required' : null;
}

const inputState = ref<InputState<FileInputValue>>(createInputState({
  value: [
    {
      name: 'Yuri',
      url: 'https://patriarche-ux.fr/wp-content/uploads/2022/01/yuri-patriarche-ux-official.jpg',
      size: null,
      type: 0,
      file: null,
    },
  ],
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
      default: 'file',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input file',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: 'JPG, PNG, PDF - 3 Mo max.',
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

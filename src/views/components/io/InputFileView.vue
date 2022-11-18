<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-file"
      :state="state"
    />

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-file/template.txt"
      scss="/code/view/component/io/input-file/scss.txt"
      script="/code/view/component/io/input-file/script.txt"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-file
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
  type FileInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig } from '@/lib/utils';

function validate(value: FileInputValue) {
  return value.length <= 0 ? 'Required' : null;
}

const state = ref<InputState<FileInputValue>>(createInputState({
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
  scss: createScssControllersConfig([
    '--mk-input-file-border-color',
    '--mk-input-file-dropzone-background-color',
    '--mk-input-file-dropzone-border-width',
    '--mk-input-file-dropzone-border-radius',
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

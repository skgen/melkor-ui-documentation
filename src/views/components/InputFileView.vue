<template>
  <div class="pux-InputFileView">
    <AppInputTitlePreview
      i18n-key="input-file"
      :state="inputState"
    />
    <AppSandboxPreview
      v-model:componentProps="componentProps"
      :definition="definition"
      template="/code/view/component/io/input-file/template.txt"
      @props-change="handlePropsChange"
    >
      <mk-input-file
        v-model="inputState"
        v-bind="componentProps"
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
  type FileModel,
  type InputState,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import { PropType, type ComponentProps, CodeLanguage } from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

function validate(value: FileModel[]) {
  return value.length <= 0 ? 'Required' : null;
}

const inputState = ref<InputState<FileModel[]>>(createInputState({
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

const definition = {
  state: {
    type: PropType.reference,
    required: true,
    default: createInputState({
      value: [
        {
          name: 'Yuri',
          url: 'https://patriarche-ux.fr/wp-content/uploads/2022/01/yuri-patriarche-ux-official.jpg',
          size: null,
          type: 0,
          file: null,
        },
      ],
    }),
  },
  validate: {
    type: PropType.reference,
    required: false,
    default: validate,
  },
  name: {
    type: PropType.string,
    required: false,
    default: 'file-demo',
  },
  label: {
    type: PropType.string,
    required: false,
    default: 'Input file',
  },
  hint: {
    type: PropType.string,
    required: false,
    default: 'JPG, PNG, PDF - 3 Mo max.',
  },
};

const componentProps = ref({});

function handlePropsChange(newProps: ComponentProps) {
  const { state, ...otherProps } = newProps;
  componentProps.value = otherProps;
}

</script>

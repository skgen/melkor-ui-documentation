<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-textarea"
      :state="inputState"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-textarea/template.txt"
      @props-change="handlePropsChange"
    >
      <mk-input-textarea
        v-model="inputState"
        v-bind="componentProps"
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
  PropType, type ComponentProps, CodeLanguage, type PropsDefinition,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

function validate(value: TextareaInputValue) {
  return value === null ? 'Required' : null;
}

const inputState = ref<InputState<TextareaInputValue>>(createInputState({
  value: 'Hello world',
}));

const definition: PropsDefinition = {
  state: {
    type: PropType.vModel,
    required: true,
    default: inputState.value,
  },
  validate: {
    type: PropType.reference,
    required: false,
    default: validate,
  },
  name: {
    type: PropType.string,
    required: false,
    default: 'textarea',
  },
  label: {
    type: PropType.string,
    required: false,
    default: 'Input textarea',
  },
  hint: {
    type: PropType.string,
    required: false,
    default: "I'm a textarea input",
  },
  fill: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  rows: {
    type: PropType.number,
    required: false,
    default: 2,
  },
};

const componentProps = ref({});

function handlePropsChange(newProps: ComponentProps) {
  const { state, ...otherProps } = newProps;
  componentProps.value = otherProps;
}

</script>

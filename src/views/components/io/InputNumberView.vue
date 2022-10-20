<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-number"
      :state="inputState"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-number/template.txt"
      @props-change="handlePropsChange"
    >
      <mk-input-number
        v-model="inputState"
        v-bind="componentProps"
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
  PropType, type ComponentProps, CodeLanguage, type PropsDefinition,
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
    default: 'number',
  },
  label: {
    type: PropType.string,
    required: false,
    default: 'Input number',
  },
  hint: {
    type: PropType.string,
    required: false,
    default: "I'm a number input",
  },
  fill: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
};

const componentProps = ref({});

function handlePropsChange(newProps: ComponentProps) {
  const { state, ...otherProps } = newProps;
  componentProps.value = otherProps;
}

</script>

<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-password"
      :state="inputState"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-password/template.txt"
      @props-change="handlePropsChange"
    >
      <mk-input-password
        v-model="inputState"
        v-bind="componentProps"
      />
      <template #code-after>
        <AppAsyncCodeBlock
          file-path="/code/view/component/io/input-password/script.txt"
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
  type PasswordInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  PropType, type ComponentProps, CodeLanguage, type PropsDefinition,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

function validate(value: PasswordInputValue) {
  return value === null ? 'Required' : null;
}

const inputState = ref<InputState<PasswordInputValue>>(createInputState({
  value: '@superSecretPass#',
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
    default: 'password',
  },
  label: {
    type: PropType.string,
    required: false,
    default: 'Input password',
  },
  hint: {
    type: PropType.string,
    required: false,
    default: "I'm a password input",
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

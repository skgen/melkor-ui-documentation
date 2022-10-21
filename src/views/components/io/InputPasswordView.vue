<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-password"
      :state="inputState"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-password/template.txt"
      @change="handlePreviewChange"
    >
      <mk-input-password
        v-model="inputState"
        v-bind="attributes.props"
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
  AttributeType, CodeLanguage, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

function validate(value: PasswordInputValue) {
  return value === null ? 'Required' : null;
}

const inputState = ref<InputState<PasswordInputValue>>(createInputState({
  value: '@superSecretPass#',
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
      default: 'password',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input password',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a password input",
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

<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-password"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/components/io/input-password/template.hbs"
      scss="/code/view/components/io/input-password/scss.hbs"
      script="/code/view/components/io/input-password/script.hbs"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-password
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
  type PasswordInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: PasswordInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<PasswordInputValue>>(createInputState({
  value: '@superSecretPass#',
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
  scss: createScssControllersConfig([
    '--mk-input-password-padding-x',
    '--mk-input-password-padding-y',
    '--mk-input-password-border-radius',
    '--mk-input-password-background-color',
    '--mk-input-password-border-color',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = mapSandboxAttributesWithoutInputState(newAttributes);
}

</script>

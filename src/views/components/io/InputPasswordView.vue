<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-password"
      :state="state"
    />

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
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
              >
                <template
                  v-if="attributes.slots['leading-icon']"
                  #leading-icon
                >
                  <mk-icon icon="group" />
                </template>
                <template
                  v-if="attributes.slots['trailing-icon']"
                  #trailing-icon
                >
                  <mk-icon icon="verified_user" />
                </template>
              </mk-input-password>
            </template>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
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
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

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
    disabled: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-password-background-color',
    '--mk-input-password-border-color',
    '--mk-input-password-border-radius',
    '--mk-input-password-border-width',
    '--mk-input-password-color',
    '--mk-input-password-font-size',
    '--mk-input-password-line-height',
    '--mk-input-password-icon-color',
    '--mk-input-password-icon-size',
    '--mk-input-password-padding-x',
    '--mk-input-password-padding-y',
    '--mk-input-password-spacing',
  ]),
  slots: createSlotsControllersConfig(
    ['leading-icon', 'trailing-icon'],
  ),
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

<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-textarea"
      :state="state"
    />

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/io/input-textarea/template.hbs"
            scss="/code/view/components/io/input-textarea/scss.hbs"
            script="/code/view/components/io/input-textarea/script.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-input-textarea
                v-model="state"
                v-bind="attributes.props"
                :style="style"
              />
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
  type TextareaInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: TextareaInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<TextareaInputValue>>(createInputState({
  value: null,
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
    placeholder: {
      type: AttributeType.string,
      required: false,
      default: 'The Ainur were angelic spirits created by Eru Ilúvatar at the Beginning.',
    },
    rows: {
      type: AttributeType.number,
      required: false,
      default: 4,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-textarea-background-color',
    '--mk-input-textarea-border-color',
    '--mk-input-textarea-border-radius',
    '--mk-input-textarea-border-width',
    '--mk-input-textarea-color',
    '--mk-input-textarea-font-size',
    '--mk-input-textarea-line-height',
    '--mk-input-textarea-padding-x',
    '--mk-input-textarea-padding-y',
    '--mk-input-textarea-placeholder-color',
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

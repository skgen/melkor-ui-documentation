<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-radio"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/components/io/input-radio/template.hbs"
      scss="/code/view/components/io/input-radio/scss.hbs"
      script="/code/view/components/io/input-radio/script.hbs"
      :script-variables="{
        nullable: attributes.props.nullable,
      }"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-radio
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
  type RadioInputOption,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

type RadioInputValue = { name: string; race: 'ainur' | 'elf' } | null;

function validate(value: RadioInputValue) {
  return value === null ? 'Required' : null;
}

const options: RadioInputOption<RadioInputValue>[] = [
  { label: 'Melkor', value: { name: 'Melkor', race: 'ainur' } },
  { label: 'Celebrimbor', value: { name: 'Celebrimbor', race: 'elf' } },
  { label: 'Manwë', value: { name: 'Manwë', race: 'ainur' } },
  { label: 'Glorfindel', value: { name: 'Glorfindel', race: 'elf' } },
];

const state = ref<InputState<RadioInputValue>>(
  createInputState({
    value: options[0].value,
  }),
);

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
      default: 'radio',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input radio',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a radio input",
    },
    options: {
      type: AttributeType.reference,
      required: true,
      default: options,
    },
    nullable: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-radio-spacing',
    '--mk-input-radio-size',
    '--mk-input-radio-color-active',
    '--mk-input-radio-border-color',
    '--mk-input-radio-border-width',
    '--mk-input-radio-border-width-active',
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

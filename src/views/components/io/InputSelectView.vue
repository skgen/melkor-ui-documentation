<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-select"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-select/template.txt"
      @change="handlePreviewChange"
    >
      <mk-input-select
        v-model="state"
        v-bind="attributes.props"
      />
      <template #code-after>
        <AppAsyncCodeBlock
          file-path="/code/view/component/io/input-select/script.txt"
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
  type SelectInputOption,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, CodeLanguage, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

type SelectInputValue = { name: string; race: 'ainur' | 'elf' } | null;

function validate(value: SelectInputValue) {
  return value === null ? 'Required' : null;
}

const options: SelectInputOption<SelectInputValue>[] = [
  { label: '-----', value: null },
  { label: 'Melkor', value: { name: 'Melkor', race: 'ainur' } },
  { label: 'Celebrimbor', value: { name: 'Celebrimbor', race: 'elf' } },
  { label: 'Manwë', value: { name: 'Manwë', race: 'ainur' } },
  { label: 'Glorfindel', value: { name: 'Glorfindel', race: 'elf' } },
];

const state = ref<InputState<SelectInputValue>>(
  createInputState({
    value: options[1].value,
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
      default: 'select',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input select',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a select input",
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    options: {
      type: AttributeType.reference,
      required: true,
      default: options,
    },
  },
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

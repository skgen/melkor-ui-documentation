<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-radio"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-radio/template.txt"
      @change="handlePreviewChange"
    >
      <mk-input-radio
        v-model="state"
        v-bind="attributes.props"
      />
      <template #code-after>
        <AppAsyncCodeBlock
          file-path="/code/view/component/io/input-radio/script.txt"
          :language="CodeLanguage.typescript"
          :variables="{
            orNull: attributes.props.nullable ? ' | null' : '',
          }"
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
  AttributeType, CodeLanguage, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

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

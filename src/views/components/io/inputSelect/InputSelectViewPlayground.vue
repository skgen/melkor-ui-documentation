<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/io/input-select/playground.vue.hbs"
        scss="/code/view/components/io/input-select/playground.scss.hbs"
        script="/code/view/components/io/input-select/playground.ts.hbs"
        @change="handlePreviewChange"
      >
        <template #default="{ style }">
          <mk-input-select
            v-model="state"
            v-bind="attributes.props"
            :style="style"
          />
        </template>
      </AppSandboxPreview>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  createInputState,
  type InputState,
  type SelectInputOption,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

type SelectInputValue = { name: string; race: 'ainur' | 'elf' } | null;

function validate(value: SelectInputValue) {
  return value === null ? 'Required' : null;
}

const options: SelectInputOption<SelectInputValue>[] = [
  { label: '-----', value: null, disabled: true },
  { label: 'Melkor', value: { name: 'Melkor', race: 'ainur' } },
  { label: 'Celebrimbor', value: { name: 'Celebrimbor', race: 'elf' } },
  { label: 'Manwë', value: { name: 'Manwë', race: 'ainur' }, disabled: true },
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
    options: {
      type: AttributeType.reference,
      required: true,
      default: options,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-select-background-color',
    '--mk-input-select-border-color',
    '--mk-input-select-border-radius',
    '--mk-input-select-border-width',
    '--mk-input-select-color',
    '--mk-input-select-font-size',
    '--mk-input-select-line-height',
    '--mk-input-select-icon-size',
    '--mk-input-select-padding-x-left',
    '--mk-input-select-padding-x-right',
    '--mk-input-select-padding-y',
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

<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-number"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/components/io/input-number/template.hbs"
      scss="/code/view/components/io/input-number/scss.hbs"
      script="/code/view/components/io/input-number/script.hbs"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-number
          v-model="state"
          v-bind="attributes.props"
          :style="style"
        >
          <template
            v-if="attributes.slots.icon"
            #icon
          >
            <mk-icon icon="euro" />
          </template>
        </mk-input-number>
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
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: NumberInputValue) {
  if (value === null) {
    return 'Required';
  }
  return value <= 5 ? 'Value must be more than 5' : null;
}

const state = ref<InputState<NumberInputValue>>(createInputState({
  value: 10,
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
      default: 'number',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input number',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a number input",
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: AttributeType.string,
      required: false,
      default: '1337',
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-number-padding-x',
    '--mk-input-number-padding-y',
    '--mk-input-number-border-radius',
    '--mk-input-number-background-color',
    '--mk-input-number-border-color',
    '--mk-input-number-icon-color',
    '--mk-input-number-icon-size',
    '--mk-input-number-placeholder-color',
  ]),
  slots: createSlotsControllersConfig(
    ['icon'],
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

<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-date"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-date/template.txt"
      scss="/code/view/component/io/input-date/scss.txt"
      script="/code/view/component/io/input-date/script.txt"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-date
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
  type DateInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig } from '@/lib/utils';

function validate(value: DateInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<DateInputValue>>(createInputState({
  value: new Date(),
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
      default: 'date',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input date',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a date input",
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    datetime: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    showTimezone: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-date-spacing',
    '--mk-input-date-padding-x',
    '--mk-input-date-padding-y',
    '--mk-input-date-border-radius',
    '--mk-input-date-background-color',
    '--mk-input-date-border-color',
  ]),
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

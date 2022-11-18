<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-toggle"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-toggle/template.txt"
      script="/code/view/component/io/input-toggle/script.txt"
      scss="/code/view/component/io/input-toggle/scss.txt"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-toggle
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
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig } from '@/lib/utils';

function validate(value: string) {
  return value === 'Not toggled' ? 'Must be toggled' : null;
}

const state = ref<InputState<{ iAm: 'toggled' } | 'Not toggled'>>(
  createInputState({ value: { iAm: 'toggled' } }),
);

const checked = { iAm: 'toggled' };

const unchecked = 'Not toggled';

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
      default: 'toggle',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input toggle',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a toggle input",
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    checked: {
      type: AttributeType.reference,
      required: false,
      default: checked,
    },
    unchecked: {
      type: AttributeType.reference,
      required: false,
      default: unchecked,
    },
    checkedLabel: {
      type: AttributeType.string,
      required: false,
      default: 'Checked',
    },
    uncheckedLabel: {
      type: AttributeType.string,
      required: false,
      default: 'Unchecked',
    },
    checkedIcon: {
      type: AttributeType.string,
      required: false,
      default: 'check',
    },
    uncheckedIcon: {
      type: AttributeType.string,
      required: false,
      default: 'close',
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-toggle-color',
    '--mk-input-toggle-color-active',
    '--mk-input-toggle-spacing',
    '--mk-input-toggle-size',
    '--mk-input-toggle-padding',
    '--mk-input-toggle-target-padding',
    '--mk-input-toggle-icon-size',
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

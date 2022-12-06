<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-checkbox"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/components/io/input-checkbox/template.hbs"
      script="/code/view/components/io/input-checkbox/script.hbs"
      scss="/code/view/components/io/input-checkbox/scss.hbs"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-checkbox
          v-model="state"
          v-bind="attributes.props"
          :style="style"
        >
          <template
            v-if="attributes.slots['checked-icon']"
            #checked-icon
          >
            <mk-icon icon="remove" />
          </template>
        </mk-input-checkbox>
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
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

type CheckboxInputValue = 'checked' | { iAm: 'unchecked' };

function validate(value: CheckboxInputValue) {
  return value === 'checked' ? null : 'Must be checked';
}

const state = ref<InputState<CheckboxInputValue>>(
  createInputState({ value: { iAm: 'unchecked' } }),
);

const checked: CheckboxInputValue = 'checked';
const unchecked: CheckboxInputValue = { iAm: 'unchecked' };

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
      default: 'checkbox',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input checkbox',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a checkbox input",
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
  },
  scss: createScssControllersConfig([
    '--mk-input-checkbox-color-active',
    '--mk-input-checkbox-color-on-active',
    '--mk-input-checkbox-spacing',
    '--mk-input-checkbox-size',
    '--mk-input-checkbox-target-padding',
    '--mk-input-checkbox-icon-size',
    '--mk-input-checkbox-border-color',
    '--mk-input-checkbox-border-width',
  ]),
  slots: createSlotsControllersConfig([
    'checked-icon',
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

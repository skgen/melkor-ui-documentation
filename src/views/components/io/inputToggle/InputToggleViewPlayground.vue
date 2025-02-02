<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/io/input-toggle/template.hbs"
        script="/code/view/components/io/input-toggle/script.hbs"
        scss="/code/view/components/io/input-toggle/scss.hbs"
        @change="handlePreviewChange"
      >
        <template #default="{ style }">
          <mk-input-toggle
            v-model="state"
            v-bind="attributes.props"
            :style="style"
          >
            <template
              v-if="attributes.slots['checked-icon']"
              #checked-icon
            >
              <mk-icon icon="check" />
            </template>
            <template
              v-if="attributes.slots['unchecked-icon']"
              #unchecked-icon
            >
              <mk-icon icon="close" />
            </template>
          </mk-input-toggle>
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
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

type ToggleInputValue = { iAm: 'toggled' } | 'Not toggled';

function validate(value: ToggleInputValue) {
  return value === 'Not toggled' ? 'Must be toggled' : null;
}

const checked: ToggleInputValue = { iAm: 'toggled' };
const unchecked: ToggleInputValue = 'Not toggled';

const state = ref<InputState<ToggleInputValue>>(
  createInputState({ value: checked }),
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
    iconInBackground: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-toggle-color',
    '--mk-input-toggle-font-size',
    '--mk-input-toggle-line-height',
    '--mk-input-toggle-spacing',
  ]),
  slots: createSlotsControllersConfig([
    'checked-icon',
    'unchecked-icon',
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

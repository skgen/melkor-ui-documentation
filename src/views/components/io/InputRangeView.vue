<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-range"
      :state="state"
    />

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/io/input-range/template.hbs"
            scss="/code/view/components/io/input-range/scss.hbs"
            script="/code/view/components/io/input-range/script.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-input-range
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
  type RangeInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: RangeInputValue) {
  if (value === null) {
    return 'Required';
  }
  return value <= 5 ? 'Value must be more than 5' : null;
}

const state = ref<InputState<RangeInputValue>>(createInputState({
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
      default: 'range',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input range',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a range input",
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
    min: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
    max: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
    step: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-range-color-active',
    '--mk-input-range-thumb-border-width',
    '--mk-input-range-thumb-size',
    '--mk-input-range-track-background-color',
    '--mk-input-range-track-height',
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

<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/io/input-time/playground.vue.hbs"
        scss="/code/view/components/io/input-time/playground.scss.hbs"
        script="/code/view/components/io/input-time/playground.ts.hbs"
        @change="handlePreviewChange"
      >
        <template #default="{ style }">
          <mk-input-time
            v-model="state"
            v-bind="attributes.props"
            :style="style"
          >
            <template
              v-if="attributes.slots.icon"
              #icon
            >
              <mk-icon icon="hourglass_empty" />
            </template>
            <template
              v-if="attributes.slots.preview"
              #preview="{ value }"
            >
              <template v-if="value">
                {{ value.toISOString() }}
              </template>
            </template>
            <template
              v-if="attributes.slots['cancel']"
              #cancel
            >
              <mk-icon icon="delete_forever" />
            </template>
          </mk-input-time>
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
  type TimeInputValue,
  Time,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: TimeInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<TimeInputValue>>(createInputState({
  value: new Time(),
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
      default: 'time',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input time',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm a time input",
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
    cancelable: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-time-background-color',
    '--mk-input-time-border-color',
    '--mk-input-time-border-radius',
    '--mk-input-time-border-width',
    '--mk-input-time-color',
    '--mk-input-time-font-size',
    '--mk-input-time-line-height',
    '--mk-input-time-icon-color',
    '--mk-input-time-icon-size',
    '--mk-input-time-padding-x',
    '--mk-input-time-padding-y',
    '--mk-input-time-spacing',
  ]),
  slots: createSlotsControllersConfig([
    'icon',
    'preview',
    'cancel',
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

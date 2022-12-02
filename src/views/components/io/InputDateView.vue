<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-date"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/components/io/input-date/template.hbs"
      :template-variables="{
        datetimeExpression,
        dateExpression
      }"
      scss="/code/view/components/io/input-date/scss.hbs"
      script="/code/view/components/io/input-date/script.hbs"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-input-date
          v-model="state"
          v-bind="attributes.props"
          :style="style"
        >
          <template
            v-if="attributes.slots.icon"
            #icon
          >
            <mk-icon icon="schedule" />
          </template>
          <template
            v-if="attributes.slots.preview"
            #preview="{ datetime, value }"
          >
            <template v-if="value">
              <template v-if="datetime">
                {{ formatDate(value, `dd/LL/yyyy - Ho '${$t('view.inputDate.format.hour')}', m '${$t('view.inputDate.format.minute')}'`) }}
              </template>
              <template v-else>
                {{ formatDate(value, 'dd/LL/yyyy') }}
              </template>
            </template>
          </template>
        </mk-input-date>
      </template>
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import {
  createInputState,
  formatDate,
  type InputState,
  type DateInputValue,
} from '@patriarche/melkor';
import { useI18n } from 'vue-i18n';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

const { t } = useI18n();

// eslint-disable-next-line max-len
const datetimeExpression = computed(() => `{{ formatDate(value, "dd/LL/yyyy - Ho '${t('view.inputDate.format.hour')}', m '${t('view.inputDate.format.minute')}'") }}`);
const dateExpression = computed(() => "{{ formatDate(value, 'dd/LL/yyyy') }}");

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
    '--mk-input-date-icon-color',
    '--mk-input-date-icon-size',
  ]),
  slots: createSlotsControllersConfig([
    'icon',
    'preview',
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

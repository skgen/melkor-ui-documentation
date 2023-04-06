<template>
  <div>
    <AppInputTitlePreview
      i18n-key="inputIcon"
      :state="state"
    />
    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/io/input-icon/playground.vue.hbs"
            scss="/code/view/components/io/input-icon/playground.scss.hbs"
            script="/code/view/components/io/input-icon/playground.ts.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-input-icon
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
  type IconInputValue,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';
import { createScssControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: IconInputValue) {
  return value === null ? 'Required' : null;
}

const state = ref<InputState<IconInputValue>>(createInputState({
  value: null,
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
      default: 'icon',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input icon',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: "I'm an icon input",
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
  },
  scss: createScssControllersConfig([
    '--mk-input-icon-background-color',
    '--mk-input-icon-border-color',
    '--mk-input-icon-border-radius',
    '--mk-input-icon-border-width',
    '--mk-input-icon-font-size',
    '--mk-input-icon-line-height',
    '--mk-input-icon-color',
    '--mk-input-icon-icon-size',
    '--mk-input-icon-padding-x-left',
    '--mk-input-icon-padding-x-right',
    '--mk-input-icon-padding-y',
    '--mk-input-icon-options-distance',
    '--mk-input-icon-option-background-color',
    '--mk-input-icon-option-background-color-hover',
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

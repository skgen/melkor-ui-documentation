<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-toggle"
      :state="state"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-toggle/template.txt"
      @change="handlePreviewChange"
    >
      <mk-input-toggle
        v-model="state"
        v-bind="attributes.props"
      />
      <template #code-after>
        <AppAsyncCodeBlock
          file-path="/code/view/component/io/input-toggle/script.txt"
          :language="CodeLanguage.typescript"
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
  AttributeType, CodeLanguage, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

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
  },
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

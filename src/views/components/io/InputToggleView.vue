<template>
  <div>
    <AppInputTitlePreview
      i18n-key="input-toggle"
      :state="inputState"
    />
    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/io/input-toggle/template.txt"
      @props-change="handlePropsChange"
    >
      <mk-input-toggle
        v-model="inputState"
        v-bind="componentProps"
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
  PropType, type ComponentProps, CodeLanguage, type PropsDefinition,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputTitlePreview from '@/components/AppInputTitlePreview.vue';

function validate(value: string) {
  return value === 'Not toggled' ? 'Must be toggled' : null;
}

const inputState = ref<InputState<{ iAm: 'toggled' } | 'Not toggled'>>(
  createInputState({ value: { iAm: 'toggled' } }),
);

const checked = { iAm: 'toggled' };

const unchecked = 'Not toggled';

const definition: PropsDefinition = {
  state: {
    type: PropType.vModel,
    required: true,
    default: inputState.value,
  },
  validate: {
    type: PropType.reference,
    required: false,
    default: validate,
  },
  name: {
    type: PropType.string,
    required: false,
    default: 'toggle',
  },
  label: {
    type: PropType.string,
    required: false,
    default: 'Input toggle',
  },
  hint: {
    type: PropType.string,
    required: false,
    default: "I'm a toggle input",
  },
  fill: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  checked: {
    type: PropType.reference,
    required: false,
    default: checked,
  },
  unchecked: {
    type: PropType.reference,
    required: false,
    default: unchecked,
  },
  checkedLabel: {
    type: PropType.string,
    required: false,
    default: 'Checked',
  },
  uncheckedLabel: {
    type: PropType.string,
    required: false,
    default: 'Unchecked',
  },
};

const componentProps = ref({});

function handlePropsChange(newProps: ComponentProps) {
  const { state, ...otherProps } = newProps;
  componentProps.value = otherProps;
}

</script>

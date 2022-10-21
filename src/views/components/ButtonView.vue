<template>
  <div class="pux-ButtonView">
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.button.name') }}</h1>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/button.txt"
      :primary-mode="attributes.props.onPrimary === true"
      :template-variables="variables"
      @change="handlePreviewChange"
    >
      <mk-button v-bind="attributes.props">
        <mk-icon icon="desktop_windows" />
        {{ variables.label }}
        <mk-icon icon="arrow_forward" />
      </mk-button>
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import { AttributeType, type ComponentAttributes, type ComponentDefinition } from '@/lib/definition';

const variables = {
  label: 'Button',
};

const definition: ComponentDefinition = reactive({
  props: {
    outlined: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    onPrimary: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    text: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
});

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
}

</script>

<style lang="scss">
.pux-ButtonView {
    &-primary {
        background-color: var(--app-primary-color);
    }
}
</style>

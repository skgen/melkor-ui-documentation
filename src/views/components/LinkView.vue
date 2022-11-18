<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.link.name') }}</h1>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/link/template.txt"
      :template-variables="variables"
      @change="handlePreviewChange"
    >
      <mk-link v-bind="attributes.props">
        {{ variables.label }}
      </mk-link>
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import { AttributeType, type ComponentAttributes, type ComponentDefinition } from '@/lib/definition';

const variables = {
  label: 'Link label',
};

const definition: ComponentDefinition = {
  props: {
    to: {
      type: AttributeType.string,
      required: false,
      default: '/',
    },
    asButton: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    asWrapper: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
}

</script>

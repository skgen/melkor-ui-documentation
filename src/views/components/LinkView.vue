<template>
  <div>
    <AppPageTitle>
      {{ $t('component.link.name') }}
    </AppPageTitle>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/components/link/template.hbs"
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
import AppPageTitle from '@/components/AppPageTitle.vue';
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
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
}

</script>

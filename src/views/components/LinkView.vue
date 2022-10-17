<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ t('component.link.name') }}</h1>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <h2>{{ t('app.interactiveView') }}</h2>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :props-definition="def"
      template="/code/view/component/link.txt"
      :template-variables="variables"
    >
      <template #component="props">
        <mk-link v-bind="props">
          {{ variables.label }}
        </mk-link>
      </template>
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { reactive } from 'vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import { PropType, type PropsDefinition } from '@/lib/definition';

const { t } = useI18n();

const variables = {
  label: 'Link label',
};

const def: PropsDefinition = reactive({
  to: {
    type: PropType.string,
    required: false,
    default: '/',
  },
  asButton: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  asWrapper: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
});

</script>

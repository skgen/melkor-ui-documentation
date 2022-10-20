<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ t('component.link.name') }}</h1>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <h2>{{ t('app.interactiveView') }}</h2>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/link.txt"
      :template-variables="variables"
      @props-change="handlePropsChange"
    >
      <mk-link v-bind="componentProps">
        {{ variables.label }}
      </mk-link>
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { reactive, ref } from 'vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import { PropType, type ComponentProps, type PropsDefinition } from '@/lib/definition';

const { t } = useI18n();

const variables = {
  label: 'Link label',
};

const definition: PropsDefinition = reactive({
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

const componentProps = ref({});

function handlePropsChange(newProps: ComponentProps) {
  componentProps.value = newProps;
}

</script>

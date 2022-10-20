<template>
  <div class="pux-ButtonView">
    <mk-wysiwyg-preview>
      <h1>{{ t('component.button.name') }}</h1>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <h2>{{ t('app.interactiveView') }}</h2>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/button.txt"
      :primary-mode="componentProps.onPrimary === true"
      :template-variables="variables"
      @props-change="handlePropsChange"
    >
      <mk-button v-bind="componentProps">
        <mk-icon icon="desktop_windows" />
        {{ variables.label }}
        <mk-icon icon="arrow_forward" />
      </mk-button>
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
  label: 'Button',
};

const definition: PropsDefinition = reactive({
  outlined: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  onPrimary: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  text: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
});

const componentProps = ref<ComponentProps>({});

function handlePropsChange(newProps: ComponentProps) {
  componentProps.value = newProps;
}

</script>

<style lang="scss">
.pux-ButtonView {
    &-primary {
        background-color: var(--app-primary-color);
    }
}
</style>

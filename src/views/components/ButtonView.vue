<template>
  <div class="pux-ButtonView">
    <mk-wysiwyg-preview>
      <h1>{{ t('component.button.name') }}</h1>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <h2>{{ t('app.interactiveView') }}</h2>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :props-definition="def"
      template="/code/view/component/button.txt"
    >
      <template #component="props">
        <mk-button v-bind="props">
          <mk-icon icon="desktop_windows" />
          Bouton
          <mk-icon icon="arrow_forward" />
        </mk-button>
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

const def: PropsDefinition = reactive({
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

</script>

<style lang="scss">
.pux-ButtonView {
    &-primary {
        background-color: var(--app-primary-color);
    }
}
</style>

<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ t('component.localeSelector.name') }}</h1>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-locale-selector />
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import AppDemoBlock from '@/components/AppDemoBlock.vue';

const { t } = useI18n();
</script>

<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.localeSelector.name') }}</h1>
    </mk-wysiwyg-preview>

    <AppSandboxPreview template="/code/view/component/locale-selector/template.txt">
      <mk-locale-selector />
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
</script>

<template>
  <div>
    <AppPageTitle>
      {{ $t('component.localeSelector.name') }}
    </AppPageTitle>

    <AppSandboxPreview template="/code/view/components/locale-selector/template.hbs">
      <mk-locale-selector />
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

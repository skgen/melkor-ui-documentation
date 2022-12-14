<template>
  <div class="pux-ThemeSelectorView">
    <AppPageTitle>
      {{ $t('component.themeSelector.name') }}
    </AppPageTitle>

    <AppSandboxPreview template="/code/view/components/theme-selector/template.hbs">
      <mk-theme-selector />
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

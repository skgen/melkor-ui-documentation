<template>
  <div class="pux-TranslationsView">
    <AppPageTitle>
      {{ $t('view.translations.title') }}
    </AppPageTitle>

    <AppAsyncCodeBlock
      file-path="/code/view/translations/translations.json.hbs"
      :language="CodeLanguage.json"
      full-size
    />
  </div>
</template>

<script lang="ts" setup>
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';
</script>

<style lang="scss">
.pux-TranslationsView {
    flex: 1;
    padding: var(--app-m-5) var(--app-m-8);
}
</style>

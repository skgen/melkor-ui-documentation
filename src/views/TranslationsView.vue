<template>
  <div class="pux-TranslationsView">
    <AppDocLayout>
      <mk-wysiwyg-preview>
        <h1>{{ $t('app.translations') }}</h1>
      </mk-wysiwyg-preview>
    </AppDocLayout>
  </div>
</template>

<script lang="ts" setup>
import AppDocLayout from '@/components/layout/AppDocLayout.vue';
</script>

<style lang="scss">
.pux-TranslationsView {
    flex: 1;
    padding: 30px 50px;
}
</style>

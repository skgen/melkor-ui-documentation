<template>
  <div class="pux-TranslationsView">
    <AppDocLayout>
      <AppPageTitle>
        {{ $t('app.translations') }}
      </AppPageTitle>
      <mk-skeleton size="50px" />
    </AppDocLayout>
  </div>
</template>

<script lang="ts" setup>
import AppDocLayout from '@/components/layouts/AppDocLayout.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

<style lang="scss">
.pux-TranslationsView {
    flex: 1;
    padding: var(--app-m-5) var(--app-m-8);
}
</style>

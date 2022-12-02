<template>
  <div class="pux-HomeView">
    <AppPageTitle>
      {{ $t('app.welcome', { appName }) }}
    </AppPageTitle>
  </div>
</template>

<script lang="ts" setup>
import AppPageTitle from '@/components/AppPageTitle.vue';

const appName = import.meta.env.VITE_APP_NAME;

</script>

<style lang="scss">
.pux-HomeView {
    flex: 1;
    padding: 30px 50px;
}
</style>

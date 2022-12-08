<template>
  <div class="pux-ComponentView">
    <AppDocLayout>
      <RouterView />
    </AppDocLayout>
  </div>
</template>

<script lang="ts" setup>
import AppDocLayout from '@/components/layouts/AppDocLayout.vue';
</script>

<style lang="scss">
.pux-ComponentView {
    flex: 1;
    padding: var(--app-m-5) var(--app-m-8);
}
</style>

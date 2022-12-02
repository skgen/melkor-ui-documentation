<template>
  <div class="pux-ConceptView">
    <AppDocLayout>
      <RouterView />
    </AppDocLayout>
  </div>
</template>

<script lang="ts" setup>
import AppDocLayout from '@/components/layout/AppDocLayout.vue';
</script>

<style lang="scss">
.pux-ConceptView {
    flex: 1;
    padding: var(--app-m-5) var(--app-m-8);
}
</style>

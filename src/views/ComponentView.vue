<template>
  <div class="pux-ComponentView">
    <AppDocLayout>
      <RouterView />
    </AppDocLayout>
  </div>
</template>

<script lang="ts" setup>
import AppDocLayout from '@/components/layout/AppDocLayout.vue';
</script>

<style lang="scss">
.pux-ComponentView {
    flex: 1;
    padding: 30px 50px;
}
</style>

<template>
  <aside class="pux-TheSidebar">
    <nav class="pux-TheSidebar-nav">
      <AppNavigationLevel
        v-for="(level, index) in sidebar"
        :key="index"
        :level="level"
      />
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import AppNavigationLevel from '@/components/AppNavigationLevel.vue';
import { sidebar } from '@/lib/data/navigation';
</script>

<style lang="scss">
.pux-TheSidebar {
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 0 var(--app-m-4) var(--app-m-12);
    background-color: var(--app-background-color-soft);
    border-right: 1px solid var(--app-border-color);

    &-nav {
        display: flex;
        flex-direction: column;
        padding-top: var(--app-m-3);
    }
}
</style>

<template>
  <aside class="pux-TheAside">
    <div class="pux-TheAside-header">
      <strong>On this page</strong>
    </div>
    <nav class="pux-TheAside-nav">
      <AppNavigationLevel
        v-for="(level, index) in props.navigation"
        :key="index"
        :level="level"
        :link-match-strategy="LinkMatchStrategy.exactPathWithHash"
      />
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { LinkMatchStrategy } from '@patriarche/melkor';
import type { NavigationLevel } from '@/features/navigation';
import AppNavigationLevel from '@/components/AppNavigationLevel.vue';

type Props = {
  navigation: NavigationLevel[];
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.pux-TheAside {
    position: sticky;
    top: 0;
    height: 100vh;
    padding: var(--app-m-3) var(--app-m-4) var(--app-m-12) 0;
    overflow: auto;
    font-size: 11px;

    &-header {
        color: var(--app-text-color-soft);
        text-transform: uppercase;
    }

    &-nav {
        display: flex;
        flex-direction: column;
        gap: var(--app-m-3);
        padding-top: var(--app-m-3);
    }
}
</style>

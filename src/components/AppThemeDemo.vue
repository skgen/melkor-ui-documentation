<template>
  <div
    v-theme="{ ...theme, hijack: true }"
    class="pux-AppThemeDemo"
  />
</template>

<script lang="ts" setup>
import { useTheme } from '@patriarche/melkor';

const { theme } = useTheme();
</script>

<style lang="scss">
@import "@patriarche/melkor/style/mixins";

.pux-AppThemeDemo {
    width: 100px;
    height: 100px;
    border: 10px solid var(--app-background-color-contrast);

    // border-radius: var(--app-border-radius);
    border-radius: 20px;
    transition:
        border-radius var(--app-transition-duration-2),
        border-color var(--app-transition-duration-2),
        border-width var(--app-transition-duration-2);

    @include theme("lord-of-the-ring") {
        border-color: gold;
        border-width: 15px;
        border-radius: 50%;
    }
}
</style>

<template>
  <div class="pux-AppChangelogBreakingChange">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import "@patriarche/melkor/style/mixins";

.pux-AppChangelogBreakingChange {
    position: relative;

    &::before {
        @include pseudo;

        top: 0;
        right: calc(100% + 15px);
        width: 4px;
        height: 100%;
        background-color: var(--app-error-color);
        border-radius: 50px;
    }

    &::after {
        @include pseudo($content: "error");

        top: 0;
        top: 50%;
        right: calc(100% + 25px);
        font-family: "Material Symbols Rounded", sans-serif;
        font-size: 30px;
        font-variation-settings: "FILL" 1;
        line-height: 1;
        color: var(--app-error-color);
        transform: translate(0, -50%);
    }
}
</style>

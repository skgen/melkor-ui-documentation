<template>
  <div class="pux-AppDocLayout">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.pux-AppDocLayout {
    margin: 0 auto;

    > * {
        > * {
            margin: var(--app-m-4) 0;
        }

        > :first-child {
            margin-top: 0 !important;
        }

        > :last-child {
            margin-bottom: 0 !important;
        }
    }
}
</style>

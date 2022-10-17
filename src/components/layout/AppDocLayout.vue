<template>
  <div class="pux-AppDocLayout">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.pux-AppDocLayout {
    max-width: 1200px;
    margin: 0 auto;

    > * {
        > * {
            margin: 16px 0;
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

<template>
  <div class="pux-AppDebugBox">
    <span class="pux-AppDebugBox-label">{{ props.label }}</span>
    <span class="pux-AppDebugBox-value">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  label?: string;
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.pux-AppDebugBox {
    position: relative;
    display: inline-block;
    border: 1px solid var(--app-border-color);

    &-label {
        display: inline-flex;
        padding: 2px 4px;
        font-size: 14px;
        border-right: 1px solid var(--app-border-color);
        border-bottom: 1px solid var(--app-border-color);
    }

    &-value {
        display: block;
        padding: 4px 8px;
    }
}
</style>

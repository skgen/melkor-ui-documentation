<template>
  <div class="pux-AppDemoBlock">
    <slot />
    <div
      v-if="slots.left && slots.right"
      class="pux-AppDemoBlock-sides"
    >
      <div
        v-if="slots.left"
        class="pux-AppDemoBlock-side"
        data-side="left"
      >
        <slot name="left" />
      </div>
      <div
        v-if="slots.right"
        class="pux-AppDemoBlock-side"
        data-side="right"
      >
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<style lang="scss">
.pux-AppDemoBlock {
    padding: 22px 24px;
    border: 3px dashed var(--app-border-color);
    border-radius: 8px;

    &-sides {
        display: flex;
        gap: 10px;
    }

    &-side {
        &[data-side="left"] {
            flex: 1;
        }

        &[data-side="right"] {
            flex: 1;
            border-left: 1px solid var(--app-border-color);
        }
    }
}
</style>

<template>
  <div class="pux-AppColorPreview">
    <div class="pux-AppColorPreview-shape" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type Props = {
  color: string;
};

const props = defineProps<Props>();

const color = computed(() => `var(${props.color})`);
</script>

<style lang="scss">
.pux-AppColorPreview {
    --color-preview-color: v-bind(color);

    &-shape {
        width: 80px;
        height: 80px;
        background-color: hsl(var(--color-preview-color));
        border-radius: 50%;
    }
}
</style>

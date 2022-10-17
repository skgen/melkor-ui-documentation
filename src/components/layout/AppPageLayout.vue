<template>
  <div
    class="pux-AppPageLayout"
    :data-center="props.center || undefined"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
type Props = {
  center?: boolean;
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.pux-AppPageLayout {
    flex: 1;

    &[data-center="true"] {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
    }
}
  </style>

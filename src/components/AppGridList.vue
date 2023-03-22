<template>
  <div class="pux-AppGridList">
    <div
      v-for="(item, index) of props.list"
      :key="index"
      class="pux-AppGridList-item"
    >
      <slot
        name="item"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  list: unknown[];
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.pux-AppGridList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--app-m-2);

    &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        font-size: 30px;
        background-color: var(--app-background-color-highlight);
        border: 1px solid var(--app-border-color);
        border-radius: var(--app-border-radius);
    }
}
</style>

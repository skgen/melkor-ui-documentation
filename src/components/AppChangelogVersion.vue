<template>
  <h2>
    <mk-icon
      v-if="props.stable"
      icon="task_alt"
    />
    <slot />
  </h2>
</template>

<script lang="ts" setup>
type Props = {
  stable?: boolean;
};

const props = defineProps<Props>();
</script>

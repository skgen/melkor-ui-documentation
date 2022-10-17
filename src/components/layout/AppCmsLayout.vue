<template>
  <div class="pux-AppCmsLayout">
    <mk-wysiwyg-preview>
      <h1>{{ props.title }}</h1>
      <slot />
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>

type Props = {
  title: string;
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.pux-AppCmsLayout {
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
}
</style>

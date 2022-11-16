<template>
  <div class="pux-NotFoundView">
    <mk-image src="/images/gandalf.gif" />
  </div>
</template>

<script lang="ts" setup>
// import AppPageLayout from '@/layout/AppPageLayout.vue';
</script>

<style lang="scss">
.pux-NotFoundView {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .mk-AppImage {
        overflow: hidden;
        filter: grayscale(100%);
        border-radius: 400px 400px 200px 200px;
    }
}
</style>

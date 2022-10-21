<template>
  <div class="pux-HomeView">
    <mk-wysiwyg-preview>
      <h1>{{ $t('app.welcome', { appName }) }}</h1>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>

const appName = import.meta.env.VITE_APP_NAME;

</script>

<style lang="scss">
.pux-HomeView {
    flex: 1;
    padding: 30px 50px;
}
</style>

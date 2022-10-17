<template>
  <mkt-app>
    <div class="pux-App">
      <TheHeader />
      <div class="pux-App-content">
        <TheSidebar />
        <RouterView />
      </div>
    </div>
  </mkt-app>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue';
import TheSidebar from '@/components/TheSidebar.vue';
</script>

<style lang="scss">
.pux-App {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: tls();

    &-content {
        display: flex;
        flex: 1;
    }
}
</style>

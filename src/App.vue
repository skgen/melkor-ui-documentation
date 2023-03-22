<template>
  <mkt-app>
    <div class="pux-App">
      <TheHeader />
      <div class="pux-App-main">
        <AppAsideNavigationContextProvider>
          <router-view />
        </AppAsideNavigationContextProvider>
      </div>
    </div>
  </mkt-app>
</template>

<script lang="ts" setup>
import { RouterView, useRouter } from 'vue-router';
import { onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { persistLocale } from '@patriarche/melkor';
import TheHeader from '@/components/TheHeader.vue';
import AppAsideNavigationContextProvider from '@/components/contexts/AppAsideNavigationContextProvider.vue';

const { locale } = useI18n();
const router = useRouter();

watch(router.currentRoute, (newRoute, oldRoute) => {
  if (newRoute.path !== oldRoute.path) {
    locale.value = import.meta.env.VITE_APP_DEFAULT_LOCALE;
  }
});

onMounted(() => {
  locale.value = import.meta.env.VITE_APP_DEFAULT_LOCALE;
  persistLocale(locale.value);
});
</script>

<style lang="scss">
.pux-App {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

    &-main {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
}
</style>

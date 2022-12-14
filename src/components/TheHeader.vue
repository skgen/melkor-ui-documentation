<template>
  <div class="pux-TheHeader">
    <AppBreadcrumb :navigation="navigation" />
    <div class="pux-TheHeader-dashboard">
      <mk-link to="/changelog">
        {{ $t('view.changelog.title') }}
      </mk-link>
      <div class="pux-TheHeader-controllers">
        <mk-theme-toggle compact />
        <!-- <mk-locale-selector /> -->
        <!-- <mk-theme-selector /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppBreadcrumb, { type BreadcrumbEntry } from '@/components/AppBreadcrumb.vue';

const navigation: BreadcrumbEntry[] = [];

</script>

<style lang="scss">
.pux-TheHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--app-m-1) var(--app-m-3) var(--app-m-1) var(--app-m-4);
    background-color: var(--app-background-color-soft);
    border-bottom: 1px solid var(--app-border-color);

    &-dashboard {
        display: flex;
        align-items: center;
    }

    &-controllers {
        display: flex;
        gap: var(--app-m-1);
        align-items: center;
        margin: 0 0 0 var(--app-m-3);
    }
}
</style>

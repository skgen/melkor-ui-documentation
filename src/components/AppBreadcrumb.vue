<template>
  <nav class="pux-AppBreadcrumb">
    <mk-link
      to="/"
      class="pux-AppBreadcrumb-app"
    >
      {{ appName }}
    </mk-link>
    <mk-link
      v-for="link in props.navigation"
      :key="link.url"
      :to="link.url"
    >
      <component
        :is="link.icon"
        v-if="link.icon"
      />
      {{ link.label }}
    </mk-link>
  </nav>
</template>

<script lang="ts" setup>
import type { FunctionalComponent } from 'vue';

type Props = {
  navigation: BreadcrumbEntry[];
};

const props = defineProps<Props>();

const appName = import.meta.env.VITE_APP_NAME;

</script>

<script lang="ts">
export type BreadcrumbEntry = {
  label: string;
  url: string;
  icon?: FunctionalComponent;
};
</script>

<style lang="scss">
.pux-AppBreadcrumb {
    display: flex;

    .mk-AppLink {
        svg {
            width: 20px;
        }
    }

    &-app {
        &.mk-AppLink {
            font-size: 2rem;
            font-weight: 700;
        }
    }

    > * + * {
        margin: 0 0 0 10px;
    }
}
</style>

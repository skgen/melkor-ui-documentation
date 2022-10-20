<template>
  <nav class="pux-AppBreadcrumb">
    <mk-link
      to="/"
      class="pux-AppBreadcrumb-app"
    >
      {{ appName }}<small>{{ appVersion }}</small>
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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-undef
const appVersion = `v${__APP__.version}`;

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
        small {
            font-size: 1.2rem;
        }

        &.mk-AppLink {
            align-items: baseline;
            font-size: 2rem;
            font-weight: 700;
        }
    }

    > * + * {
        margin: 0 0 0 10px;
    }
}
</style>

<template>
  <nav class="pux-AppBreadcrumb">
    <mk-link
      to="/"
      class="pux-AppBreadcrumb-app"
    >
      <mk-image
        src="/images/ring-outlined.png"
        data-type="dark"
      />
      <mk-image
        src="/images/ring-filled.png"
        data-type="light"
      />
      <span>{{ appName }}<small>{{ appVersion }}</small></span>
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
        .mk-AppImage {
            width: 30px;
            margin: 0 var(--app-m-1) 0 0;

            &[data-type="dark"][data-theme="light"] {
                display: none;
            }

            &[data-type="dark"] {
                filter: invert(1);
            }

            &[data-type="light"][data-theme="dark"] {
                display: none;
            }
        }

        small {
            font-size: 1.2rem;
        }

        &.mk-AppLink {
            --mk-link-text-color: inherit;
            --mk-link-text-color-active: inherit;

            align-items: center;
            font-size: 2rem;
            font-weight: 700;

            span {
                display: flex;
                gap: var(--app-m-1);
                align-items: baseline;
            }
        }
    }

    > * + * {
        margin: 0 0 0 10px;
    }
}
</style>

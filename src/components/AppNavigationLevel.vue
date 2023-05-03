<template>
  <div
    class="pux-AppNavigationLevel"
    :data-group="!!props.level.children"
    :data-deep="props.deep"
  >
    <mk-link :to="props.level.to">
      {{ $t(props.level.title) }}
    </mk-link>
    <div
      v-if="props.level.children"
      class="pux-AppNavigationLevel-children"
    >
      <AppNavigationLevel
        v-for="child in props.level.children"
        :key="child.title"
        :level="child"
        :deep="props.deep + 1"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationLevel } from '@/features/navigation';

type Props = {
  deep?: number;
  level: NavigationLevel;
};

const props = withDefaults(defineProps<Props>(), {
  deep: 0,
});
</script>

<style lang="scss">
.pux-AppNavigationLevel {
    display: flex;
    flex-direction: column;

    &-children {
        display: flex;
        flex-direction: column;
        gap: var(--app-m-1);
        padding-top: var(--app-m-2);
    }

    svg {
        width: 20px;
    }

    &[data-deep="0"] {
        .mk-AppLink {
            --mk-link-font-size: 0.875rem;
        }

        > .mk-AppLink {
            font-weight: 400;
        }
    }

    &[data-deep="2"] {
        > .mk-AppLink {
            padding-left: var(--app-m-1);
        }
    }

    &[data-deep="1"] {
        > .mk-AppLink {
            &:not([data-active="true"]) {
                --mk-link-text-color: var(--app-text-color-soft);

                font-weight: 300;
            }
        }

        > .pux-AppNavigationLevel-children {
            padding-top: var(--app-m-1);
        }
    }
}
</style>

<template>
  <div
    class="pux-AppNavigationLevel"
    :data-group="!!props.level.children"
    :data-deep="props.deep"
  >
    <mk-link :to="props.level.to">
      {{ props.level.title }}
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
import type { NavigationLevel } from '@/lib/data/navigation';

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
        padding-top: 5px;
    }

    &[data-group="true"][data-deep="0"] {
        & + & {
            padding-top: 15px;
        }
    }

    &[data-group="true"] + & {
        padding-top: 5px;
    }

    svg {
        width: 20px;
    }

    &[data-deep="0"] {
        .mk-AppLink {
            font-size: 1.2rem;
        }
    }

    &[data-deep="1"] {
        .mk-AppLink {
            font-size: 1rem;
            font-weight: 700;
        }
    }

    &[data-deep="2"] {
        .mk-AppLink {
            font-weight: 400;

            --mk-link-text-color: var(--app-text-color-soft);
        }
    }
}
</style>

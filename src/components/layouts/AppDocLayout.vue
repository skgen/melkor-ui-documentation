<template>
  <div class="pux-AppDocLayout">
    <div
      v-if="props.sidebar"
      class="pux-AppDocLayout-sidebar"
    >
      <TheSidebar />
    </div>
    <div class="pux-AppDocLayout-content">
      <slot />
    </div>
    <div
      v-if="navigation.length > 0"
      class="pux-AppDocLayout-aside"
    >
      <TheAside :navigation="navigation" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import TheSidebar from '@/components/TheSidebar.vue';
import TheAside from '@/components/TheAside.vue';
import useAsideNavigationContext from '@/composables/useAsideNavigationContext';

type Props = {
  sidebar?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  sidebar: true,
});

const asideContext = useAsideNavigationContext();
const navigation = computed(() => asideContext.navigation.value);

</script>

<style lang="scss">
.pux-AppDocLayout {
    display: flex;
    flex: 1;

    &-sidebar {
        flex: 0 0 250px;
    }

    &-content {
        display: flex;
        flex: 1 1 100%;
        flex-direction: column;
        padding: var(--app-m-5) var(--app-m-8);
    }

    &-aside {
        flex: 0 0 auto;
    }
}
</style>

<template>
  <slot />
</template>

<script lang="ts" setup>
import {
  provide, ref, watch, type UnwrapRef,
} from 'vue';
import { useRouter } from 'vue-router';
import { asideNavigationContextKey, type AsideNavigationContext } from '@/features/navigation';

type Navigation = UnwrapRef<AsideNavigationContext['navigation']>;

const navigation = ref<Navigation>([]);

const router = useRouter();

function setNavigation(newNavigation: Navigation) {
  navigation.value = newNavigation;
}
function resetNavigation() {
  navigation.value = [];
}

watch(router.currentRoute, (newRoute, oldRoute) => {
  if (newRoute.path !== oldRoute.path) {
    resetNavigation();
  }
});

provide(asideNavigationContextKey, {
  navigation,
  setNavigation,
  resetNavigation,
});

</script>

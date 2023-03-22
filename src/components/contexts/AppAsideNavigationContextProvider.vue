<template>
  <slot />
</template>

<script lang="ts" setup>
import {
  provide, ref, watch, type UnwrapRef,
} from 'vue';
import { useRoute } from 'vue-router';
import { asideNavigationContextKey, type AsideNavigationContext } from '@/features/navigation';

type Navigation = UnwrapRef<AsideNavigationContext['navigation']>;

const navigation = ref<Navigation>([]);

const route = useRoute();

function setNavigation(newNavigation: Navigation) {
  navigation.value = newNavigation;
}
function resetNavigation() {
  navigation.value = [];
}

// watch(route, () => {
//   resetNavigation();
// });

provide(asideNavigationContextKey, {
  navigation,
  setNavigation,
  resetNavigation,
});

</script>

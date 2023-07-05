<template>
  <div
    ref="element"
    class="pux-AppHashTrigger"
  >
    <slot v-bind="{ hash: props.hash }" />
  </div>
</template>

<script lang="ts" setup>
import {
  onBeforeUnmount, onMounted, ref,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { listenToScroll } from '@/features/scroll';

type Props = {
  hash: string;
};

const props = defineProps<Props>();

const route = useRoute();
const router = useRouter();

const element = ref<HTMLElement | null>(null);
let stopListening: (() => void) | null = null;

onMounted(() => {
  function handleScroll() {
    if (!element.value) {
      return;
    }
    const rect = element.value.getBoundingClientRect();
    const line = window.innerHeight * 0.2;
    const intersect = rect.top < line && rect.top + rect.height > line;
    if (intersect) {
      router.replace({
        ...route,
        hash: `#${props.hash}`,
      });
    }
  }

  stopListening = listenToScroll(handleScroll);
});

onBeforeUnmount(() => {
  if (stopListening) {
    stopListening();
  }
});
</script>

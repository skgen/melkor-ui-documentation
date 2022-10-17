<template>
  <div class="pux-AppAsyncCodeBlockvue">
    <AppCodeBlock
      v-if="code"
      v-bind="props"
      :code="code"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import AppCodeBlock, { CodeLanguage } from '@/components/AppCodeBlock.vue';

type Props = {
  filePath: string;
  language?: CodeLanguage;
  variables?: Record<string, string | number | boolean>;
};

const props = defineProps<Props>();

const code = ref<string | null>(null);

async function fetchCodeBlock(filePath: string) {
  const res = await fetch(filePath, { method: 'get' });
  code.value = await res.text();
}

watch(() => props.filePath, (newFilePath) => {
  fetchCodeBlock(newFilePath);
});

onMounted(() => {
  fetchCodeBlock(props.filePath);
});
</script>

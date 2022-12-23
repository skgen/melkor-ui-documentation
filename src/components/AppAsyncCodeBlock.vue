<template>
  <div class="pux-AppAsyncCodeBlock">
    <div
      v-if="!code"
      class="pux-AppAsyncCodeBlock-placeholder"
    >
      <mk-skeleton
        height="10px"
        width="30%"
      />
      <mk-skeleton
        height="10px"
        width="50%"
      />
      <mk-skeleton
        height="10px"
        width="20%"
      />
      <mk-skeleton
        height="10px"
        width="40%"
      />
      <mk-skeleton
        height="10px"
        width="10%"
      />
      <mk-skeleton
        height="10px"
        width="15%"
      />
      <mk-skeleton
        height="10px"
        width="5%"
      />

      <mk-skeleton
        height="10px"
        width="50%"
      />
      <mk-skeleton
        height="10px"
        width="55%"
      />
      <mk-skeleton
        height="10px"
        width="5%"
      />
    </div>
    <AppCodeBlock
      v-if="code"
      v-bind="props"
      :code="code"
      :full-size="fullSize"
      :filename="props.filename"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import type { CodeLanguage } from '@/lib/definition';

type Props = {
  filePath: string;
  language?: CodeLanguage;
  variables?: Record<string, unknown>;
  fullSize?: boolean;
  filename?: string;
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

<style lang="scss">
.pux-AppAsyncCodeBlock {
    &-placeholder {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--app-m-1);
        min-height: 48px;
        padding: var(--app-m-2) var(--app-m-6) var(--app-m-2) var(--app-m-3);
        overflow: hidden;
        background: #2d2d2d;
        border-radius: 8px;
    }
}
</style>

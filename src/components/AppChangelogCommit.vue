<template>
  <span class="pux-AppChangelogCommit">
    <span class="pux-AppChangelogCommit-list">
      <mk-link
        v-for="vSha of cSha"
        :key="vSha.id"
        class="pux-AppChangelogCommit-sha"
        :to="vSha.url"
        target="_blank"
      >
        {{ vSha.id }}
      </mk-link>
    </span>
    <mk-wysiwyg-preview>
      <slot />
    </mk-wysiwyg-preview>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { isArray } from '@patriarche/melkor';

type Props = {
  sha: string | string[];
};

const props = defineProps<Props>();

function createShaRef(sha: string) {
  return {
    id: sha.substring(0, 8),
    url: `https://gitlab.com/patriarche/vuejs-3/melkor-ui/melkor-ui-package/-/commit/${sha}`,
  };
}

const cSha = computed(() => {
  if (isArray(props.sha)) {
    return props.sha.map(createShaRef);
  }
  return [createShaRef(props.sha)];
});
</script>

<style lang="scss">
.pux-AppChangelogCommit {
    display: flex;
    flex-direction: column;
    gap: var(--app-m-1);
    align-items: flex-start;

    &-sha {
        --mk-link-font-size: 12px;
    }

    &-list {
        display: inline-flex;
        gap: var(--app-m-1);
        align-items: center;
    }
}
</style>

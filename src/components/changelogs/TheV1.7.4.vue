<template>
  <AppChangelogVersion stable>
    v1.7.4
  </AppChangelogVersion>
  <h3>Minor</h3>
  <p>
    Changed floating-layer <code>z-index</code> to correctly render upon fullscreen-layer
  </p>
  <div>
    <AppAsyncCodeBlock
      file-path="/code/changelogs/v1.7.4/css-1.hbs"
      :language="CodeLanguage.scss"
      filename="before"
    />
  </div>
  <div>
    <AppAsyncCodeBlock
      file-path="/code/changelogs/v1.7.4/css-2.hbs"
      :language="CodeLanguage.scss"
      filename="then"
    />
  </div>
</template>

<script lang="ts" setup>
import { CodeLanguage } from '@/lib/definition';
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
</script>

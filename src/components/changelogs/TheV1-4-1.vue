<template>
  <AppChangelogVersion stable>
    v1.4.1
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <AppChangelogBreakingChange>
    <p>Reword all CSS <code>surface</code> logic to <code>contrast</code> logic</p>
    <blockquote>
      <p>
        This is due to a personal misundertanding on <code>surface</code> logic from <code>Material design</code>.
        What was intended in {{ appName }} named after <code>surface</code> logic was actually intended to
        target <code>contrast</code> logic
      </p>
      <p>
        <em><strong>i.e.:</strong></em>
      </p>
      <div>
        <AppAsyncCodeBlock
          file-path="/code/changelogs/v1.4.1/css.hbs"
          :language="CodeLanguage.scss"
          filename="Black theme base color definition"
        />
      </div>
    </blockquote>
  </AppChangelogBreakingChange>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <AppChangelogVersion stable>
    v1.24.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <div>
    <AppChangelogBreakingChange>
      <AppChangelogCommit sha="54ba91cf4f9dafc79339623ef1e58c3343fa012e">
        <p>
          Hyphenated <code>update:modelValue</code> to <code>update:model-value</code> in <code>emit</code> parameter from <code>useInput</code>
          hook to improve generic type inference
        </p>
      </AppChangelogCommit>
    </AppChangelogBreakingChange>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

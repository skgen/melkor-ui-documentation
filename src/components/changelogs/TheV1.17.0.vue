<template>
  <AppChangelogVersion stable>
    v1.17.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <AppChangelogBreakingChange>
    <AppChangelogCommit sha="a7f3d18a32149d58db7866d70767a44dca405e98">
      <p>
        Normalized <code>i18n</code> keys, check diff on <mk-link to="/concept/i18n-keys">
          {{ $t('view.i18n.titles.keys') }}
        </mk-link>
      </p>
    </AppChangelogCommit>
  </AppChangelogBreakingChange>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

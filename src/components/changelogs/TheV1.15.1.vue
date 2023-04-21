<template>
  <AppChangelogVersion stable>
    v1.15.1
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Fixed a bug on <mk-link to="/component/fullscreen-view">
      {{ $t('component.fullscreenView.name') }}
    </mk-link> where component would not cleanup correctly
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <AppChangelogVersion stable>
    v1.13.1
  </AppChangelogVersion>
  <h3>Minor</h3>
  <p>
    Fixed a bug on <mk-link to="/component/fullscreen-view">
      {{ $t('component.fullscreenView.name') }}
    </mk-link> where the component would not clean correctly after unmounting.
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

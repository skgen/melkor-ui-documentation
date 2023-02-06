<template>
  <AppChangelogVersion stable>
    v1.6.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Added new <code>round</code> prop & new <code>--mk-icon-weight</code> css
    variable support to <mk-link to="/component/icon">
      {{ $t('component.icon.name') }}
    </mk-link>
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

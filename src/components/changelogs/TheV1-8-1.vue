<template>
  <AppChangelogVersion stable>
    v1.8.1
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Improved <mk-link to="/component/button">
      {{ $t('component.button.name') }}
    </mk-link> css variables
  </p>
  <p>
    Improved <mk-link to="/component/tabs">
      {{ $t('component.tabs.name') }}
    </mk-link> <code>{{ `<mk-tab />` }}</code> css variables
  </p>
  <h3>Minor</h3>
  <p>
    Removed <code>span</code> wrapper from <code>{{ `<mk-tab />` }}</code> in <mk-link to="/component/tabs">
      {{ $t('component.tabs.name') }}
    </mk-link>
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <AppChangelogVersion stable>
    v1.12.0
  </AppChangelogVersion>
  <h3>New components</h3>
  <p>
    <mk-link to="/component/media-query">
      {{ $t('component.mediaQuery.name') }}
    </mk-link>
  </p>
  <h3>Enhancements</h3>
  <p>
    Added icons list in
    <mk-link to="/component/icon#get-icons">
      {{ $t('component.icon.name') }}
    </mk-link>
  </p>
  <p>
    Enhanced <mk-link to="/component/input-select">
      {{ $t('component.input-select.name') }}
    </mk-link> <code>options</code> prop with new attribute <code>disabled</code>
  </p><h3>Minor</h3>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

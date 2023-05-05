<template>
  <AppChangelogVersion stable>
    v1.16.1
  </AppChangelogVersion>
  <h3>Minor</h3>
  <AppChangelogCommit sha="3442ad1ebfc183ad5a6e794466de32ef48803fcf">
    <p>
      Fixed a bug on <mk-link to="/component/button">
        {{ $t('component.button.name') }}
      </mk-link> where <code>disabled</code> effects were not rendering correctly
    </p>
  </AppChangelogCommit>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

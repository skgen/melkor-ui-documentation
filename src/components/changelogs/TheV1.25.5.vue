<template>
  <AppChangelogVersion stable>
    v1.25.5
  </AppChangelogVersion>
  <h3>Minor</h3>
  <AppChangelogCommit sha="530668546a896fc070710d91075dd260c28f97aa">
    <p>
      Fixed <mk-link to="/component/input-date">
        {{ $t('component.inputDate.name') }}
      </mk-link> &
      <mk-link to="/component/input-time">
        {{ $t('component.inputTime.name') }}
      </mk-link> default <code>min-height</code>
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

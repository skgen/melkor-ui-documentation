<template>
  <AppChangelogVersion stable>
    v1.23.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <div>
    <AppChangelogBreakingChange>
      <AppChangelogCommit sha="b2348be1fa23fc064fd7cb14bf9da1aaa3a320c1">
        <p>
          Changed
          <mk-link to="/config/setup">
            global setup
          </mk-link>
        </p>
      </AppChangelogCommit>
    </AppChangelogBreakingChange>
  </div>
  <div>
    <AppChangelogCommit sha="89dc7f60d8c50ad506c82f1db6979d896c069777">
      <p>
        Enhanced
        <mk-link to="/concept/i18n-setup">
          i18n setup
        </mk-link> with builtin translation messages for <em>English</em> & <em>French</em>
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

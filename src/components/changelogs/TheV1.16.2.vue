<template>
  <AppChangelogVersion stable>
    v1.16.2
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <div>
    <AppChangelogCommit sha="10734ede46094d4f98e05b484f63246969eb5b2d">
      <p>
        Fixed a bug on fullscreen & floating layers not mutating correctly according to their children mutations
      </p>
    </AppChangelogCommit>
  </div>
  <h3>Minor</h3>
  <div>
    <AppChangelogCommit sha="803f9152d1df777f20c472dd7b03636e02322021">
      <p>
        Fixed a bug on <mk-link to="/component/input-icon">
          {{ $t('component.inputIcon.name') }}
        </mk-link> menu z-index <em>(temporary fix until final design)</em>
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

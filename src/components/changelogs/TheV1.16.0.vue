<template>
  <AppChangelogVersion stable>
    v1.16.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <AppChangelogBreakingChange>
    <AppChangelogCommit sha="f9a936fa71a14b629fd6cd111c8855bf95e4dd91">
      <p>
        Reworked <mk-link to="/component/button">
          {{ $t('component.button.name') }}
        </mk-link> style, <code>css</code> variables & enhanced interactions with <code>hover</code> & <code>active</code> states
      </p>
      <blockquote>
        If you had any custom style on <mk-link to="/component/button">
          {{ $t('component.button.name') }}
        </mk-link>, you might need to check them and fix them regarding to the new API
      </blockquote>
    </AppChangelogCommit>
  </AppChangelogBreakingChange>
  <h3>Minor</h3>
  <p>
    <AppChangelogCommit sha="05b8a4f47c68e5cdac4ae5afc360fc40cb15e6ef">
      Fixed a bug on <mk-link to="/component/table-cell">
        {{ $t('component.tableCell.name') }}
      </mk-link> not vertically expanding correctly on Firefox
    </AppChangelogCommit>
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

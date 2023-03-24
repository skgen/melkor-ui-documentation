<template>
  <AppChangelogVersion stable>
    v1.7.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  Added <mk-link to="/component/button">
    {{ $t('component.button.name') }}
  </mk-link> scss properties to documentation & improved their consistency based on other components logic
  <h3>Minor</h3>
  <div>
    <AppChangelogWarningChange>
      <p>
        <code>isEmpty</code> function doesn't return <code>true</code> anymore if value is <code>null | undefined</code>
      </p>
      <blockquote>This is a revert of <code>v0.10.0</code> update</blockquote>
    </AppChangelogWarningChange>
  </div>
  <p>
    Fixed <mk-link to="/component/table">
      {{ $t('component.table.name') }}
    </mk-link> cells component data attributes
  </p>
  <blockquote>
    When the row / column was indexed with 0, no data attribute was bound on these
    relative axis data attributes, now checking existence on nullability
  </blockquote>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

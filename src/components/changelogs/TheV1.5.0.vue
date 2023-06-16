<template>
  <AppChangelogVersion stable>
    v1.5.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Added new utility function <code>exportCheckboxTreeLevels</code> to <mk-link to="/component/input-checkbox-tree">
      {{ $t('component.inputCheckboxTree.name') }}
    </mk-link>
  </p>
  <h3>Minor</h3>
  <AppChangelogBreakingChange>
    <p>
      Reworded <code>useInput</code> hook parameter attribute from <code>emits</code> to <code>emit</code>
    </p>
    <blockquote>
      This change is intended to follow VueJS official emit declaration specified
      <mk-link to="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits">
        here
      </mk-link>
    </blockquote>
  </AppChangelogBreakingChange>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

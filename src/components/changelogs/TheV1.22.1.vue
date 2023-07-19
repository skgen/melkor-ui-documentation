<template>
  <AppChangelogVersion stable>
    v1.22.1
  </AppChangelogVersion>
  <h3>Minor</h3>
  <div>
    <AppChangelogCommit sha="9f1e36a27d673bca810214ea35c20055af9f9ebf">
      <p>
        Fixed <code>Pinia</code> instance creation, {{ appName }} plugin now only instanciate one if none exist
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';

const appName = import.meta.env.VITE_APP_NAME;
</script>

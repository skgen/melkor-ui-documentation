<template>
  <AppChangelogVersion stable>
    v1.2.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Reduce {{ appName }} bundle size by removing build transform of peerDependencies including:
  </p>
  <p>
    <ul>
      <li>
        <mk-link to="https://www.npmjs.com/package/vue">
          vue
        </mk-link>
      </li>
      <li>
        <mk-link to="https://www.npmjs.com/package/pinia">
          pinia
        </mk-link>
      </li>
      <li>
        <mk-link to="https://www.npmjs.com/package/vue-router">
          vue-router
        </mk-link>
      </li>
      <li>
        <mk-link to="https://www.npmjs.com/package/vue-i18n">
          vue-i18n
        </mk-link>
      </li>
    </ul>
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';

const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <AppChangelogVersion stable>
    v1.9.1
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Enhanced <mk-link to="/component/image">
      {{ $t('component.image.name') }}
    </mk-link> when a <code>ratio</code> prop is set.
  </p>
  <blockquote>
    You can now add a custom <code>width</code> in css to an <code>{{ `<mk-app-image />` }}</code>,
    the ratio will render correctly.
  </blockquote>
  <h3>Minor</h3>
  <p>
    Standardized <mk-link to="/component/link">
      {{ $t('component.link.name') }}
    </mk-link> <code>--mk-link-gap</code> css variable name to <code>--mk-link-spacing</code>
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

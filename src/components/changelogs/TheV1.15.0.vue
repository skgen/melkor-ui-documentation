<template>
  <AppChangelogVersion stable>
    v1.15.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Simplified <mk-link to="/component/theme-toggle">
      {{ $t('component.themeToggle.name') }}
    </mk-link> css variables
  </p>
  <p>
    <ul>
      <li>Removed <code>--mk-theme-toggle-target-padding</code></li>
      <li>Simplified <code>--mk-theme-toggle-icon-size</code> to a simple <code>px</code> value</li>
    </ul>
  </p>
  <p>
    Exported <mk-link to="/component/wysiwyg-preview">
      {{ $t('component.wysiwygPreview.name') }}
    </mk-link> css variables
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <AppChangelogVersion stable>
    v1.8.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Exported <mk-link to="/component/menu">
      {{ $t('component.menu.name') }}
    </mk-link> default css variables & improved data inheritance
  </p>
  <p>
    Exported <mk-link to="/component/tooltip">
      {{ $t('component.tooltip.name') }}
    </mk-link> default css variables & improved data inheritance
  </p>
  <p>
    Improved <mk-link to="/component/fullscreen-view">
      {{ $t('component.fullscreenView.name') }}
    </mk-link> consistency & data inheritance
  </p>
  <h3>Minor</h3>
  <AppChangelogWarningChange>
    <p>The <code>#floating-layer</code> changed from position <code>absolute</code> to position <code>fixed</code></p>
    <blockquote>
      This might not change anything for you, except for some complex layout in menus
      including <code>fixed</code> positioning mixed with some css <code>transform</code>
    </blockquote>
  </AppChangelogWarningChange>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

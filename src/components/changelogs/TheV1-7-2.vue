<template>
  <AppChangelogVersion stable>
    v1.7.2
  </AppChangelogVersion>
  <h3>Minor</h3>
  Fixed <mk-link to="/component/icon">
    {{ $t('component.icon.name') }}
  </mk-link> default line-height to properly render them as squared components
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
</script>

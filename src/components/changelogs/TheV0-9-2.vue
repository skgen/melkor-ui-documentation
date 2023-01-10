<template>
  <AppChangelogVersion>
    v0.9.2
  </AppChangelogVersion>
  <h3>Minor</h3>
  <p>
    Improved <mk-link to="/component/wysiwyg-preview">
      {{ $t('component.wysiwygPreview.name') }}
    </mk-link> consistency through more supported HTML tags
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
</script>

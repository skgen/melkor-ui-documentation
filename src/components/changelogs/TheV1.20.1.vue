<template>
  <AppChangelogVersion stable>
    v1.20.1
  </AppChangelogVersion>
  <h3>Minor</h3>
  <div>
    <AppChangelogCommit sha="0018bd81f88e88c93d90737b5cc74bd2e0463bb0">
      <p>
        Fixed <mk-link to="/component/input-select-x">
          {{ $t('component.inputSelectX.name') }}
        </mk-link> cancel action in collection value mode
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
</script>

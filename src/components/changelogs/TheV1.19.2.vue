<template>
  <AppChangelogVersion stable>
    v1.19.2
  </AppChangelogVersion>
  <h3>Minor</h3>
  <div>
    <AppChangelogCommit sha="15bab26ec2f2ea6b54ee18e067e0290acdf61d7d">
      <p>
        Fixed an issue on <mk-link to="/component/input-select-x">
          {{ $t('component.inputSelectX.name') }}
        </mk-link> where prop <code>hideSearchOnBlur</code> would not work correctly
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
</script>

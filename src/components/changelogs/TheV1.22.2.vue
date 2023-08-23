<template>
  <AppChangelogVersion stable>
    v1.22.2
  </AppChangelogVersion>
  <h3>Minor</h3>
  <div>
    <AppChangelogCommit sha="c04d860fabc765b7cd80abd1503fcb95e680b148">
      <p>
        Fixed an issue on <mk-link to="/component/input-date">
          {{ $t('component.inputDate.name') }}
        </mk-link> & <mk-link to="/component/input-time">
          {{ $t('component.inputTime.name') }}
        </mk-link> where label wrapper was rendered even if no <code>label</code> was provided, resulting in shifted layout
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
</script>

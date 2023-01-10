<template>
  <AppChangelogVersion stable>
    v1.1.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Improved <mk-link to="/component/table">
      {{ $t('component.table.name') }}
    </mk-link> with new <code>hiddenKeys</code> prop
  </p>
  <AppChangelogBreackingChange>
    <p>
      Fixed <mk-link to="/component/table">
        {{ $t('component.table.name') }}
      </mk-link> <code>indexColumns</code> prop name to <code>indexRows</code>
    </p>
  </AppChangelogBreackingChange>
  <h3>Minor</h3>
  <AppChangelogWarningChange>
    <p>
      <mk-link to="/component/table">
        {{ $t('component.table.name') }}
      </mk-link> index column cells now render their index starting from <code>1</code> instead of <code>0</code>
    </p>
  </AppChangelogWarningChange>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogBreackingChange from '@/components/AppChangelogBreakingChange.vue';
import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';
</script>

<template>
  <AppChangelogVersion stable>
    v1.3.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    Improved <mk-link to="/component/table">
      {{ $t('component.table.name') }}
    </mk-link> rendering with dynamic header <code>slots</code>
  </p>
  <AppChangelogBreakingChange>
    <p>
      Changed <mk-link to="/component/table">
        {{ $t('component.table.name') }}
      </mk-link> <code>headers</code> prop data model
    </p>
    <p>
      <ul>
        <li>Old <code>value</code> attribute is now <code>key</code></li>
        <li>Old <code>text</code> attribute is now <code>value</code></li>
      </ul>
    </p>
    <p>
      <AppCodeBlock
        code="{ text: 'Hero name', value: 'name' }"
        filename="before"
      />
    </p>
    <p>
      <AppCodeBlock
        code="{ value: 'Hero name', key: 'name' }"
        filename="then"
      />
    </p>
  </AppChangelogBreakingChange>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

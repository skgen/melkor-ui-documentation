<template>
  <AppChangelogVersion stable>
    v1.11.0
  </AppChangelogVersion>

  <h3>Enhancements</h3>
  <p>
    Enhanced <mk-link to="/component/button">
      {{ $t('component.button.name') }}
    </mk-link> with:
  </p>
  <p>
    <ul>
      <li>
        New prop <code>light</code>
      </li>
      <li>
        New prop <code>wide</code>
      </li>
      <li>
        Improved css variables
      </li>
    </ul>
  </p>
  <p>
    Improved <mk-link to="/component/alert">
      {{ $t('component.alert.name') }}
    </mk-link> css variables
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
</script>

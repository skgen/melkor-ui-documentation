<template>
  <AppChangelogVersion stable>
    v1.4.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>Added <code>@focus</code> & <code>@blur</code> events on all inputs</p>
  <AppChangelogWarningChange>
    <p>Updated some input slots:</p>
    <p>
      <ul>
        <li>
          <mk-link to="/component/input-text">
            {{ $t('component.inputText.name') }}
          </mk-link>
        </li>
        <li>
          <mk-link to="/component/input-number">
            {{ $t('component.inputNumber.name') }}
          </mk-link>
        </li>
        <li>
          <mk-link to="/component/input-password">
            {{ $t('component.inputPassword.name') }}
          </mk-link>
        </li>
      </ul>
    </p>
    <p>
      <ul>
        <li>Old <code>icon</code> slot is now <code>leading-icon</code></li>
        <li>New <code>trailing-icon</code> slot added</li>
      </ul>
    </p>
  </AppChangelogWarningChange>
  <h3>Minor</h3>
  <p>Scope {{ appName }} <code>store</code> names with <code>mk-</code> prefix to avoid mix/overriding with project store names</p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

const appName = import.meta.env.VITE_APP_NAME;
</script>

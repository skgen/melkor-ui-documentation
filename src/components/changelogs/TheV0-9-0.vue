<template>
  <AppChangelogVersion>
    v0.9.0
  </AppChangelogVersion>
  <h3>New components</h3>
  <p>
    <mk-link to="/component/input-checkbox">
      {{ $t('component.input-checkbox.name') }}
    </mk-link>
  </p>
  <p>
    <mk-link to="/component/input-checkbox-tree">
      {{ $t('component.input-checkbox-tree.name') }}
    </mk-link>
  </p>
  <h3>Enhancements</h3>
  <p>
    Added <code>errors</code> render on multiple components:
  </p>
  <p>
    <ul>
      <li>
        <mk-link to="/component/input-text">
          {{ $t('component.input-text.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-number">
          {{ $t('component.input-number.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-password">
          {{ $t('component.input-password.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-textarea">
          {{ $t('component.input-textarea.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-toggle">
          {{ $t('component.input-toggle.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-file">
          {{ $t('component.input-file.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-color">
          {{ $t('component.input-color.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-select">
          {{ $t('component.input-select.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-radio">
          {{ $t('component.input-radio.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-date">
          {{ $t('component.input-date.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-range">
          {{ $t('component.input-range.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-checkbox">
          {{ $t('component.input-checkbox.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-checkbox-tree">
          {{ $t('component.input-checkbox-tree.name') }}
        </mk-link>
      </li>
    </ul>
  </p>
  <div>
    <AppChangelogBreakingChange>
      <p>
        Changed {{ appName }} tone colors logic from hexadecimal values to rgb based ones with opacity
      </p>
    </AppChangelogBreakingChange>
  </div>
  <p>
    Theme can now be updated manually thanks to <code>updateTheme</code> from the <code>useTheme</code> composable,
    see <mk-link to="/concept/theme#updating">
      {{ $t('view.theme.titles.use') }}
    </mk-link>
  </p>
  <p>
    Input state validation has been extracted to a standalone method <code>validateInputState</code>
  </p>
  <h3>Minor</h3>
  <p>
    Fixed an issue on checkables not getting the right next value
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';

const appName = import.meta.env.VITE_APP_NAME;
</script>

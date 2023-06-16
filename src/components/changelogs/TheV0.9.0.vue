<template>
  <AppChangelogVersion>
    v0.9.0
  </AppChangelogVersion>
  <h3>New components</h3>
  <p>
    <mk-link to="/component/input-checkbox">
      {{ $t('component.inputCheckbox.name') }}
    </mk-link>
  </p>
  <p>
    <mk-link to="/component/input-checkbox-tree">
      {{ $t('component.inputCheckboxTree.name') }}
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
      <li>
        <mk-link to="/component/input-textarea">
          {{ $t('component.inputTextarea.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-toggle">
          {{ $t('component.inputToggle.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-file">
          {{ $t('component.inputFile.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-color">
          {{ $t('component.inputColor.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-select">
          {{ $t('component.inputSelect.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-radio">
          {{ $t('component.inputRadio.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-date">
          {{ $t('component.inputDate.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-range">
          {{ $t('component.inputRange.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-checkbox">
          {{ $t('component.inputCheckbox.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-checkbox-tree">
          {{ $t('component.inputCheckboxTree.name') }}
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

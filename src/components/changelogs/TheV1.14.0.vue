<template>
  <AppChangelogVersion stable>
    v1.14.0
  </AppChangelogVersion>
  <h3>New components</h3>
  <p>
    <mk-link to="/component/checkbox">
      {{ $t('component.checkbox.name') }}
    </mk-link>
  </p>
  <p>
    <mk-link to="/component/radio">
      {{ $t('component.radio.name') }}
    </mk-link>
  </p>
  <p>
    <mk-link to="/component/toggle">
      {{ $t('component.toggle.name') }}
    </mk-link>
  </p>
  <h3>Enhancements</h3>
  <p>
    Enhanced <mk-link to="/component/pagination">
      {{ $t('component.pagination.name') }}
    </mk-link> interactions (hover, active etc...)
  </p>
  <p>
    Added <code>cancelable</code> prop on multiple inputs:
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
        <mk-link to="/component/input-color">
          {{ $t('component.inputColor.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-data">
          {{ $t('component.inputDate.name') }}
        </mk-link>
      </li>
    </ul>
  </p>
  <AppChangelogBreakingChange>
    <p>
      As <mk-link to="/component/checkbox">
        {{ $t('component.checkbox.name') }}
      </mk-link>,  <mk-link to="/component/radio">
        {{ $t('component.radio.name') }}
      </mk-link>, <mk-link to="/component/toggle">
        {{ $t('component.toggle.name') }}
      </mk-link> are now standalone components, <em>existing components</em> formerly implementing
      them dont export their <code>CSS</code> configuration anymore.
    </p>
    <p>
      <em>Existing components</em> impacted by this change are:
    </p>
    <p>
      <ul>
        <li>
          <mk-link to="/component/input-checkbox">
            {{ $t('component.inputCheckbox.name') }}
          </mk-link>
        </li>
        <li>
          <mk-link to="/component/input-radio">
            {{ $t('component.inputRadio.name') }}
          </mk-link>
        </li>
        <li>
          <mk-link to="/component/input-toggle">
            {{ $t('component.inputToggle.name') }}
          </mk-link>
        </li>
      </ul>
    </p>
  </AppChangelogBreakingChange>
  <h3>Minor</h3>
  <p>
    Fixed a bug on <mk-link to="/component/input-checkbox-tree">
      {{ $t('component.inputCheckboxTree.name') }}
    </mk-link> where <code>disabled</code> inheritance wouldn't work as expected
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

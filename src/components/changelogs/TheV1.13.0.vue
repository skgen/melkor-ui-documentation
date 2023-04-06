<template>
  <AppChangelogVersion stable>
    v1.13.0
  </AppChangelogVersion>
  <h3>New components</h3>
  <p>
    <mk-link to="/component/input-icon">
      {{ $t('component.inputIcon.name') }}
    </mk-link>
  </p>
  <h3>Enhancements</h3>
  <p>
    Enhanced <mk-link to="/component/wysiwyg-preview">
      {{ $t('component.wysiwygPreview.name') }}
    </mk-link> to only target HTML elements <strong>not having any CSS class</strong>
  </p>
  <p>
    Added <code>--mk-input-{component}-line-height</code> css variable on multiple components:
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
        <mk-link to="/component/input-date">
          {{ $t('component.input-date.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-checkbox">
          {{ $t('component.input-checkbox.name') }}
        </mk-link>
      </li>
    </ul>
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
// import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>

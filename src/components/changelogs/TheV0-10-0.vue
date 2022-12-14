<template>
  <h2>
    <mk-icon icon="task_alt" />
    v0.10.0
  </h2>
  <h3>New component</h3>
  <p>
    <mk-link to="/component/theme-toggle">
      {{ $t('component.themeToggle.name') }}
    </mk-link>
  </p>
  <h3>
    Enhancements
  </h3>
  <p>
    Added <code>disabled</code> render on multiple components:
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
  <p>
    You can now drag & drop files in <mk-link to="/component/input-file">
      {{ $t('component.input-file.name') }}
    </mk-link> dropzone
  </p>
  <h3>Minor</h3>
  <p>
    Moved all {{ appName }} <code>i18n</code> keys to <code>melkor</code> namespace, see <mk-link to="/translations">
      {{ $t('view.translations.title') }}
    </mk-link>
  </p>
  <p>
    Change <mk-link to="/component/input-toggle">
      {{ $t('component.input-toggle.name') }}
    </mk-link> base background color to the same value regardless of active theme
  </p>
  <p>
    <code>isEmpty</code> function now returns <code>true</code> if value is <code>null | undefined</code>
  </p>
  <p>
    Added <mk-link to="https://www.npmjs.com/package/vue-router">
      vue-router
    </mk-link> & <mk-link to="https://www.npmjs.com/package/vue-i18n">
      vue-i18n
    </mk-link> as peer dependencies
  </p>
  <p>
    Fix some typing issues
  </p>
</template>

<script lang="ts" setup>
const appName = import.meta.env.VITE_APP_NAME;
</script>

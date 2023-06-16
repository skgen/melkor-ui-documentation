<template>
  <AppChangelogVersion stable>
    v1.18.0
  </AppChangelogVersion>
  <h3>New components</h3>
  <div>
    <AppChangelogCommit sha="e8d85978e3d27245d5d9503353265d91a1dedc17">
      <p>
        <mk-link to="/component/input-select-x">
          {{ $t('component.inputSelectX.name') }}
        </mk-link>
      </p>
    </AppChangelogCommit>
  </div>
  <h3>Enhancements</h3>
  <div>
    <AppChangelogWarningChange>
      <AppChangelogCommit sha="cf17fac7fea774bb868f368b5c89dcdb672f8e3d">
        <p>
          Added <code>focused</code> property in <code>InputState</code> definition
        </p>
        <blockquote>This state model update could trigger watchers plugged on existing states due to focus/blur behavior</blockquote>
      </AppChangelogCommit>
    </AppChangelogWarningChange>
  </div>
  <div>
    <AppChangelogCommit sha="cf17fac7fea774bb868f368b5c89dcdb672f8e3d">
      <p>
        Exposed <code>focus</code> & <code>blur</code> methods on textable components :
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
        </ul>
      </p>
    </AppChangelogCommit>
  </div>
  <h3>Minor</h3>
  <div>
    <AppChangelogCommit sha="99120fb2b798c1c23831859cc008ac701afb9f8a">
      <p>
        Improved <mk-link to="/component/input-icon">
          {{ $t('component.inputIcon.name') }}
        </mk-link> menu to use a <mk-link to="/component/menu">
          {{ $t('component.menu.name') }}
        </mk-link> instead of an absolute layer
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';
</script>

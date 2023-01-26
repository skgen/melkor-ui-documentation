<template>
  <AppChangelogVersion stable>
    v0.8.0
  </AppChangelogVersion>
  <h3>There is a changelog !</h3>
  <p>Every release will have its changelog allowing for developers to track new features & bugfixes</p>
  <h3>New component</h3>
  <p>
    <mk-link to="/component/input-range">
      {{ $t('component.input-range.name') }}
    </mk-link>
  </p>
  <h3>Enhancements</h3>
  <div>
    <AppChangelogBreakingChange>
      <p>
        Improved <mk-link to="/component/input-toggle">
          {{ $t('component.input-toggle.name') }}
        </mk-link> icon customization.
      </p>
      <p>
        <ul>
          <li>Icons are specified threw new slots : <code>checked-icon</code> & <code>unchecked-icon</code></li>
          <li>Icons can be placed in background with new prop : <code>iconInBackground</code></li>
        </ul>
      </p>
    </AppChangelogBreakingChange>
  </div>
  <p>
    Added <code>preview</code> slot on <mk-link to="/component/input-date">
      {{ $t('component.input-date.name') }}
    </mk-link> to customize the render of previewed date
  </p>
  <p>
    Added <code>icon</code> slot on multiple components:
  </p>
  <p>
    <ul>
      <li>
        <mk-link to="/component/alert">
          {{ $t('component.alert.name') }}
        </mk-link>
      </li>
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
        <mk-link to="/component/input-color">
          {{ $t('component.input-color.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-date">
          {{ $t('component.input-date.name') }}
        </mk-link>
      </li>
    </ul>
  </p>
  <p>
    Added <code>placeholder</code> prop on multiple components:
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
        <mk-link to="/component/input-color">
          {{ $t('component.input-color.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-textarea">
          {{ $t('component.input-textarea.name') }}
        </mk-link>
      </li>
    </ul>
  </p>
  <p>
    Improved themes handling, every component has a <code>data-theme="..."</code> on root DOM Element, see
    <mk-link to="/concept/theme">
      {{ $t('view.theme.titles.use') }}
    </mk-link>
  </p>
  <p>
    Cleaned unused <mk-link to="/component/wysiwyg-preview">
      {{ $t('component.wysiwygPreview.name') }}
    </mk-link> css variables and adapt component to <strong>{{ appName }}</strong> theme
  </p>
  <p>
    Allowed <mk-link to="/component/tabs">
      {{ $t('component.tabs.name') }}
    </mk-link> to be collapsible on purpose with new prop : <code>collapsible</code>
  </p>
  <h3>Minor</h3>
  <p>
    Improved <mk-link to="/component/tooltip">
      {{ $t('component.tooltip.name') }}
    </mk-link> & <mk-link to="/component/menu">
      {{ $t('component.menu.name') }}
    </mk-link> consistency by wrapping them in a custom controlled DOM Element
  </p>
  <p>Cleaned css variables</p>
  <p>Switched Provide/Inject keys from basic strings to described Symbols</p>
  <p>CSS rendering is now overriden by CSS properties instead of CSS variables</p>
  <blockquote>
    <p>Admitting we want to override the background color from <em>red</em> to <em>green</em>, and that we have css variables like :</p>
    <p>
      <AppAsyncCodeBlock
        file-path="/code/changelogs/v0.8.0/css-1.hbs"
        :language="CodeLanguage.scss"
      />
    </p>
    <p>
      <AppAsyncCodeBlock
        file-path="/code/changelogs/v0.8.0/css-2.hbs"
        :language="CodeLanguage.scss"
        filename="before"
      />
    </p>
    <p>
      <AppAsyncCodeBlock
        file-path="/code/changelogs/v0.8.0/css-3.hbs"
        :language="CodeLanguage.scss"
        filename="then"
      />
    </p>
  </blockquote>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
import { CodeLanguage } from '@/lib/definition';

const appName = import.meta.env.VITE_APP_NAME;
</script>

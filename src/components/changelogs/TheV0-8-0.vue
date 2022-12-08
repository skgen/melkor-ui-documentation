<template>
  <mk-wysiwyg-preview>
    <h2>v0.8.0</h2>
    <h3>There is a changelog !</h3>
    <p>Every release will have its changelog allowing for developers to track new features & bugfixes</p>
    <h3>New component</h3>
    <p>
      <mk-link to="/component/input-range">
        {{ $t('component.input-range.name') }}
      </mk-link>
    </p>
    <h3>Enhancements</h3>
    <p>
      Improve <mk-link to="/component/input-toggle">
        {{ $t('component.input-toggle.name') }}
      </mk-link> icon customization.
    </p>
    <p>
      <ul>
        <li>Icons are specified threw new slots : <code>checked-icon</code> & <code>unchecked-icon</code></li>
        <li>Icons can be placed in background with new prop : <code>iconInBackground</code></li>
      </ul>
    </p>
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
      Improvement on themes handling, every component has a <code>data-theme="..."</code> on root DOM Element, see
      <mk-link to="/concept/theme">
        {{ $t('view.theme.title') }}
      </mk-link>
    </p>
    <p>
      Cleaned unused <mk-link to="/component/wysiwyg-preview">
        {{ $t('component.wysiwygPreview.name') }}
      </mk-link> css variables and adapt component to <strong>{{ appName }}</strong> theme
    </p>
    <p>
      Allow <mk-link to="/component/tabs">
        {{ $t('component.tabs.name') }}
      </mk-link> to be collapsible on purpose with new prop : <code>collapsible</code>
    </p>

    <h3>Minor</h3>
    <p>
      Improve <mk-link to="/component/tooltip">
        Popins
      </mk-link> & <mk-link to="/component/tooltip">
        Menus
      </mk-link> consistency by wrapping them in a custom controlled DOM Element
    </p>
    <p>Cleaned css variables</p>
    <p>Switched Provide/Inject keys from basic strings to described Symbols</p>
    <p>CSS rendering is now overriden by CSS properties instead of CSS variables</p>
    <blockquote>
      <p>Admitting we want to override the background color from <i>red</i> to <i>green</i>, and that we have css variables like :</p>
      <p><pre>--color: red;<br>--color-active: green;<br>background-color: var(--color);</pre></p>
      <p>Before :</p>
      <p><pre>&[data-active="true"] {<br>  --color: var(--color-active);<br>}</pre></p>
      <p>Then :</p>
      <p><pre>&[data-active="true"] {<br>  background-color: var(--color-active);<br>}</pre></p>
    </blockquote>
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
const appName = import.meta.env.VITE_APP_NAME;
</script>

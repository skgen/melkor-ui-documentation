<template>
  <AppChangelogVersion stable>
    v1.0.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <p>
    <code>i18n</code> & <code>router</code> plugin properties are no longer mandatory
  </p>
  <p>
    <mk-link to="/component/theme-context">
      {{ $t('component.themeContext.name') }}
    </mk-link> now set CSS <code>color</code> & <code>background-color</code> on itself when <code>with-node</code> is true,
    to ensure child components will render on proper theme context
  </p>
  <div>
    <AppChangelogBreakingChange>
      <p>
        Improved <mk-link to="/component/table">
          {{ $t('component.table.name') }}
        </mk-link> with:
      </p>
      <p>
        <ul>
          <li><code>dark</code> theme support</li>
          <li>Full rework of internal data handling (including target & hover effects)</li>
          <li>Better global performances (less power intensive)</li>
          <li>Simplified API (no more single prop  component)</li>
        </ul>
      </p>
    </AppChangelogBreakingChange>
  </div>
  <p>
    <mk-link to="/component/link">
      {{ $t('component.link.name') }}
    </mk-link> is no longer a <em>default text</em> rendered element, but a custom styled one
  </p>
  <p>
    <mk-link to="/component/tooltip">
      {{ $t('component.tooltip.name') }}
    </mk-link> & <mk-link to="/component/menu">
      {{ $t('component.menu.name') }}
    </mk-link> now both inherit from <mk-link to="/component/theme-context">
      {{ $t('component.themeContext.name') }}
    </mk-link>
  </p>
  <p>
    <mk-link to="/component/menu">
      {{ $t('component.menu.name') }}
    </mk-link> position can now be specified through <code>placement</code> prop
  </p>
  <h3>Minor</h3>
  <p>
    Improve layers z-index handling
  </p>
  <p>
    <mk-link to="/component/wysiwyg-preview">
      {{ $t('component.wysiwygPreview.name') }}
    </mk-link> now handle color based elements correctly (with opacity system)
  </p>
  <p>
    Fixed on <mk-link to="/component/menu">
      {{ $t('component.menu.name') }}
    </mk-link> dispatching too many <code>hide</code> events internally
  </p>
  <div>
    <AppChangelogBreakingChange>
      <mk-wysiwyg-preview>
        <p>
          <mk-link to="/component/table">
            {{ $t('component.table.name') }}
          </mk-link> slot <code>pos</code> prop changed from:
        </p>
        <div>
          <AppCodeBlock code="[number, number]" />
        </div>
        <p>to</p>
        <div>
          <AppCodeBlock code="{ x: number, y: number, key: number | string }" />
        </div>
      </mk-wysiwyg-preview>
    </AppChangelogBreakingChange>
  </div>
  <p>
    Fixed an issue on <mk-link to="/component/input-number">
      {{ $t('component.inputNumber.name') }}
    </mk-link> preventing to type <code>,</code> for floating numbers
  </p>
  <p>
    Components with a <code>display: inline-block;</code> and <code>fill</code>
    prop no longer change to <code>display: block;</code> but to <code>width: 100%;</code>
    <br>
    Impacted components are:
  </p>
  <p>
    <ul>
      <li>
        <mk-link to="/component/menu">
          {{ $t('component.menu.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/tooltip">
          {{ $t('component.tooltip.name') }}
        </mk-link>
      </li>
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
        <mk-link to="/component/input-date">
          {{ $t('component.inputDate.name') }}
        </mk-link>
      </li>
      <li>
        <mk-link to="/component/input-range">
          {{ $t('component.inputRange.name') }}
        </mk-link>
      </li>
    </ul>
  </p>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
</script>

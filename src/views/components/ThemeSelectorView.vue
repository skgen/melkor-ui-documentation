<template>
  <div class="pux-ThemeSelectorView">
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.themeSelector.name') }}</h1>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-theme-selector />
    </AppDemoBlock>
    <AppDemoBlock>
      <mk-wysiwyg-preview>
        <h2>I'm a component in the <code>app</code> theme context</h2>
        <p>{{ lorem }}</p>
      </mk-wysiwyg-preview>
      <mk-theme-context :theme="ThemeScheme.light">
        <mk-wysiwyg-preview>
          <h2>I'm a component in a <code>light</code> theme context</h2>
          <p>{{ lorem }}</p>
        </mk-wysiwyg-preview>

        <mk-theme-context :theme="ThemeScheme.dark">
          <mk-wysiwyg-preview>
            <h2>I'm a component in a <code>dark</code> theme context</h2>
            <p>{{ lorem }}</p>
            <mk-theme-context :theme="ThemeScheme.light">
              <mk-wysiwyg-preview>
                <h2>I'm a component in a <code>light</code> theme context inside a <code>dark</code> theme context</h2>
                <p>{{ lorem }}</p>
              </mk-wysiwyg-preview>
            </mk-theme-context>
            <mk-theme-context>
              <mk-wysiwyg-preview>
                <h2>I'm a component in the <code>app</code> theme context inside a <code>dark</code> theme context</h2>
                <p>{{ lorem }}</p>
              </mk-wysiwyg-preview>
            </mk-theme-context>
          </mk-wysiwyg-preview>
        </mk-theme-context>
      </mk-theme-context>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ThemeScheme } from '@patriarche/melkor';
import AppDemoBlock from '@/components/AppDemoBlock.vue';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;
</script>

<style lang="scss">
.pux-ThemeSelectorView {
    .pux-AppDemoBlock {
        .mk-AppWysiwygPreview {
            padding: var(--app-m-3);
            background-color: var(--app-background-color);

            & + .mk-AppWysiwygPreview {
                margin-top: var(--app-m-3);
            }
        }
    }
}
</style>

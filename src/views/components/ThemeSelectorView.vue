<template>
  <div class="pux-ThemeSelectorView">
    <AppPageTitle>
      {{ $t('component.themeSelector.name') }}
    </AppPageTitle>

    <AppSandboxPreview template="/code/view/components/theme-selector/template.hbs">
      <mk-theme-selector />
    </AppSandboxPreview>

    <mk-wysiwyg-preview>
      <h2>{{ $t('app.examples') }}</h2>
    </mk-wysiwyg-preview>

    <AppDemoBlock>
      <mk-wysiwyg-preview>
        <h2>I'm a component in the <code>app</code> theme context</h2>
        <p>{{ lorem }}</p>
      </mk-wysiwyg-preview>
      <mk-theme-context :theme="Theme.light">
        <mk-wysiwyg-preview>
          <h2>I'm a component in a <code>light</code> theme context</h2>
          <p>{{ lorem }}</p>
        </mk-wysiwyg-preview>

        <mk-theme-context :theme="Theme.dark">
          <mk-wysiwyg-preview>
            <h2>I'm a component in a <code>dark</code> theme context</h2>
            <p>{{ lorem }}</p>
            <mk-theme-context :theme="Theme.light">
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
import { Theme } from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';

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

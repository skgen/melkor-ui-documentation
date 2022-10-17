<template>
  <div class="pux-ThemeSelectorView">
    <mk-wysiwyg-preview>
      <h1>{{ t('component.themeSelector.name') }}</h1>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-theme-selector />
    </AppDemoBlock>
    <AppDemoBlock>
      <mk-wysiwyg-preview v-theme="{ scheme: ThemeScheme.light }">
        <h2>Je suis un composant forcé en light theme sur le composant</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </mk-wysiwyg-preview>
    </AppDemoBlock>
    <AppDemoBlock>
      <mk-wysiwyg-preview v-theme="{ scheme: ThemeScheme.dark }">
        <h2>Je suis un composant forcé en dark theme sur le composant</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </mk-wysiwyg-preview>
    </AppDemoBlock>
    <AppDemoBlock
      v-theme="{ scheme: ThemeScheme.light }"
    >
      <mk-wysiwyg-preview>
        <h2>Je suis un composant forcé en light theme via un block de context</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </mk-wysiwyg-preview>
      <mk-wysiwyg-preview>
        <h2>Je suis un composant forcé en light theme via un block de context</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </mk-wysiwyg-preview>
    </AppDemoBlock>
    <AppDemoBlock
      v-theme="{ scheme: ThemeScheme.dark }"
    >
      <mk-wysiwyg-preview>
        <h2>Je suis un composant forcé en dark theme via un block de context</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </mk-wysiwyg-preview>
      <mk-wysiwyg-preview>
        <h2>Je suis un composant forcé en dark theme via un block de context</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </mk-wysiwyg-preview>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ThemeScheme } from '@patriarche/melkor';
import { useI18n } from 'vue-i18n';
import AppDemoBlock from '@/components/AppDemoBlock.vue';

const { t } = useI18n();
</script>

<style lang="scss">
.pux-ThemeSelectorView {
    [data-theme] {
        padding: 20px;
        background-color: var(--app-background-color);
    }
}
</style>

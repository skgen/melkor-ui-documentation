<template>
  <div class="pux-ThemeView">
    <AppPageTitle>
      {{ $t('view.theme.title') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <h2>{{ $t('view.theme.titles.default') }}</h2>
    </mk-wysiwyg-preview>

    <div class="pux-ThemeView-split-x">
      <div class="pux-ThemeView-split-y">
        <mk-wysiwyg-preview>
          <h3>{{ $t('view.theme.titles.dark') }}</h3>
        </mk-wysiwyg-preview>
        <AppAsyncCodeBlock
          file-path="/code/view/concepts/theme/dark-theme.scss.hbs"
          :language="CodeLanguage.scss"
        />
      </div>
      <div class="pux-ThemeView-split-y">
        <mk-wysiwyg-preview>
          <h3>{{ $t('view.theme.titles.light') }}</h3>
        </mk-wysiwyg-preview>
        <AppAsyncCodeBlock
          file-path="/code/view/concepts/theme/light-theme.scss.hbs"
          :language="CodeLanguage.scss"
        />
      </div>
    </div>

    <mk-wysiwyg-preview>
      <h2>{{ $t('view.theme.titles.custom') }}</h2>
      <h3>{{ $t('app.languages.typescript') }}</h3>
      <p>
        <i18n-t
          keypath="view.theme.paragraph.addCustomTheme"
          scope="global"
        >
          <template #customTheme>
            <code>{{ $t('view.theme.paragraph.customThemeName') }}</code>
          </template>
        </i18n-t>
      </p>
    </mk-wysiwyg-preview>
    <AppAsyncCodeBlock
      file-path="/code/view/concepts/theme/custom-theme.ts.hbs"
      :language="CodeLanguage.typescript"
      :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
    />
    <mk-wysiwyg-preview>
      <h3>{{ $t('app.languages.scss') }}</h3>
    </mk-wysiwyg-preview>

    <div class="pux-ThemeView-split-x">
      <div class="pux-ThemeView-split-y">
        <mk-wysiwyg-preview>
          <p v-html="$t('view.theme.paragraph.useCustomThemeInScss')" />
        </mk-wysiwyg-preview>
        <AppAsyncCodeBlock
          file-path="/code/view/concepts/theme/custom-theme-raw.scss.hbs"
          :language="CodeLanguage.scss"
          :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
        />
      </div>
      <div class="pux-ThemeView-split-y">
        <mk-wysiwyg-preview>
          <p v-html="$t('view.theme.paragraph.useCustomThemeInScssBetter')" />
        </mk-wysiwyg-preview>
        <AppAsyncCodeBlock
          file-path="/code/view/concepts/theme/custom-theme-enhanced.scss.hbs"
          :language="CodeLanguage.scss"
          :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
        />
      </div>
    </div>
    <mk-wysiwyg-preview>
      <h3>{{ $t('view.theme.titles.usageInComponent') }}</h3>
      <p v-html="$t('view.theme.paragraph.useCustomThemeInComponent')" />
      <blockquote>
        <i18n-t
          keypath="view.theme.paragraph.whereThemeIsRetreivedTip"
          scope="global"
        >
          <template #themeContextComponent>
            <code>{{ '<mk-theme-context />' }}</code>
          </template>
        </i18n-t>
      </blockquote>
    </mk-wysiwyg-preview>
    <div>
      <mk-button
        :outlined="!customTheme"
        @click="toggleCustomTheme"
      >
        {{ $t(`view.theme.paragraph.${customTheme ? 'offCustomTheme' : 'onCustomTheme'}`) }}
      </mk-button>
    </div>
    <AppDemoBlock>
      <mk-theme-context :theme="customTheme">
        <AppThemeDemo />
      </mk-theme-context>
    </AppDemoBlock>
    <AppAsyncCodeBlock
      file-path="/code/view/concepts/theme/theme-binding.vue.hbs"
      :language="CodeLanguage.vue"
    />
    <AppAsyncCodeBlock
      file-path="/code/view/concepts/theme/theme-binding.ts.hbs"
      :language="CodeLanguage.typescript"
      :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
    />
    <AppAsyncCodeBlock
      file-path="/code/view/concepts/theme/theme-binding.scss.hbs"
      :language="CodeLanguage.scss"
      :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
    />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppThemeDemo from '@/components/AppThemeDemo.vue';
import { CodeLanguage } from '@/lib/definition';

const { t } = useI18n();

const customTheme = ref<string | null>(null);

function toggleCustomTheme() {
  customTheme.value = customTheme.value === null ? t('view.theme.paragraph.customThemeName') : null;
}
</script>

<style lang="scss">
.pux-ThemeView {
    &-split-x {
        display: flex;
        flex: 1;
        gap: var(--app-m-3);
    }

    &-split-y {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: var(--app-m-3);
    }
}
</style>

<template>
  <div class="pux-CustomThemeView">
    <AppPageTitle>
      {{ $t('view.theme.titles.custom') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('view.theme.titles.definitionInTypescript') }}</h2>
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
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/theme/custom-theme.ts.hbs"
            :language="CodeLanguage.typescript"
            :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
          />
        </div>
      </section>
      <section>
        <h2>{{ $t('view.theme.titles.usageInScss') }}</h2>
        <div>
          <div class="pux-CustomThemeView-split-x">
            <div class="pux-CustomThemeView-split-y">
              <mk-wysiwyg-preview>
                <p v-html="$t('view.theme.paragraph.useCustomThemeInScss')" />
              </mk-wysiwyg-preview>
              <AppAsyncCodeBlock
                file-path="/code/view/concepts/theme/custom-theme-raw.scss.hbs"
                :language="CodeLanguage.scss"
                :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
              />
            </div>
            <div class="pux-CustomThemeView-split-y">
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
        </div>
      </section>
      <section>
        <h2>{{ $t('view.theme.titles.usageInComponent') }}</h2>
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
        <div>
          <mk-button
            :outlined="!customTheme"
            @click="toggleCustomTheme"
          >
            {{ $t(`view.theme.paragraph.${customTheme ? 'offCustomTheme' : 'onCustomTheme'}`) }}
          </mk-button>
        </div>
        <div>
          <AppDemoBlock>
            <mk-theme-context :theme="customTheme">
              <AppThemeDemo />
            </mk-theme-context>
          </AppDemoBlock>
        </div>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/theme/theme-binding.vue.hbs"
            :language="CodeLanguage.vue"
          />
        </div>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/theme/theme-binding.ts.hbs"
            :language="CodeLanguage.typescript"
            :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
          />
        </div>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/theme/theme-binding.scss.hbs"
            :language="CodeLanguage.scss"
            :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
          />
        </div>
      </section>
    </mk-wysiwyg-preview>
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
.pux-CustomThemeView {
    &-split-x {
        display: flex;
        flex: 1;
        gap: var(--app-m-2);
    }

    &-split-y {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: var(--app-m-2);
    }
}
</style>

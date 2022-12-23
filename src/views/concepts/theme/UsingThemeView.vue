<template>
  <div class="pux-UsingThemeView">
    <AppPageTitle>
      {{ $t('view.theme.titles.use') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section id="updating">
        <h2>
          {{ $t('view.theme.titles.apply') }}
        </h2>
        <div v-if="theme">
          <div class="pux-UsingThemeView-split-x">
            <mk-button
              :outlined="theme.theme !== Theme.dark"
              @click="() => updateTheme(Theme.dark)"
            >
              {{ $t('melkor.theme.dark') }}
            </mk-button>
            <mk-button
              :outlined="theme.theme !== Theme.light"
              @click="() => updateTheme(Theme.light)"
            >
              {{ $t('melkor.theme.light') }}
            </mk-button>
            <mk-button
              :outlined="theme.theme !== Theme.auto"
              @click="() => updateTheme(Theme.auto)"
            >
              {{ $t('melkor.theme.auto') }}
            </mk-button>
          </div>
        </div>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/theme/apply.vue.hbs"
            :language="CodeLanguage.vue"
            :variables="{
              dark: $t('melkor.theme.dark'),
              light: $t('melkor.theme.light'),
              auto: $t('melkor.theme.auto'),
            }"
          />
        </div>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/theme/apply.ts.hbs"
            :language="CodeLanguage.typescript"
          />
        </div>
      </section>

      <section>
        <h2>{{ $t('view.theme.titles.default') }}</h2>
        <div>
          <div class="pux-UsingThemeView-split-x">
            <div class="pux-UsingThemeView-split-y">
              <mk-wysiwyg-preview>
                <h3>{{ $t('view.theme.titles.dark') }}</h3>
              </mk-wysiwyg-preview>
              <AppAsyncCodeBlock
                file-path="/code/view/concepts/theme/dark-theme.scss.hbs"
                :language="CodeLanguage.scss"
              />
            </div>
            <div class="pux-UsingThemeView-split-y">
              <mk-wysiwyg-preview>
                <h3>{{ $t('view.theme.titles.light') }}</h3>
              </mk-wysiwyg-preview>
              <AppAsyncCodeBlock
                file-path="/code/view/concepts/theme/light-theme.scss.hbs"
                :language="CodeLanguage.scss"
              />
            </div>
          </div>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { useTheme, Theme } from '@patriarche/melkor';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

const { updateTheme, theme } = useTheme();
</script>

<style lang="scss">
.pux-UsingThemeView {
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

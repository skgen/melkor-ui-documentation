<template>
  <div class="pux-I18nKeysView">
    <AppPageTitle>
      {{ $t('view.i18n.titles.keys') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.sample') }}</h2>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/i18n/keys.json.hbs"
            :language="CodeLanguage.json"
            full-size
          />
        </div>
      </section>
      <section>
        <h2>Which is where for what ?</h2>
        <h3><code>melkor.component.inputFile.[...]</code></h3>
        <p>
          <ul>
            <li>
              <mk-link to="/component/input-file">
                {{ $t('component.inputFile.name') }}
              </mk-link>
            </li>
          </ul>
        </p>
        <h3><code>melkor.component.theme.[...]</code></h3>
        <p>
          <ul>
            <li>
              <mk-link to="/component/theme-toggle">
                {{ $t('component.themeToggle.name') }}
              </mk-link>
            </li>
            <li>
              <mk-link to="/component/theme-selector">
                {{ $t('component.themeSelector.name') }}
              </mk-link>
            </li>
          </ul>
        </p>
        <h3><code>melkor.component.i18n.[...]</code></h3>
        <p>
          <ul>
            <li>
              <mk-link to="/component/locale-selector">
                {{ $t('component.localeSelector.name') }}
              </mk-link>
            </li>
          </ul>
        </p>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';
</script>

<template>
  <div class="pux-I18nSetupView">
    <AppPageTitle>
      {{ $t('view.i18n.titles.setup') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <blockquote>
          {{ appName }} uses <mk-link to="https://www.npmjs.com/package/vue-i18n">
            vue-i18n
          </mk-link> for translations
        </blockquote>
        <p>
          <code>melkor</code> namespaced keys are used within {{ appName }} components
          to provide developers an easy access to translate core components
        </p>
        <p>
          To add your own translation keys, just do as you would with <mk-link to="https://www.npmjs.com/package/vue-i18n">
            vue-i18n
          </mk-link>
        </p>
      </section>
      <section>
        <h2>{{ $t('app.example') }}</h2>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/i18n/env.hbs"
            :language="CodeLanguage.bash"
            full-size
            filename=".env"
          />
        </div>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/i18n/setup.ts.hbs"
            :language="CodeLanguage.typescript"
            full-size
          />
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

const appName = import.meta.env.VITE_APP_NAME;

</script>

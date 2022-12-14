<template>
  <div class="pux-I18nView">
    <AppPageTitle>
      {{ $t('view.i18n.title') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <blockquote>
        {{ appName }} uses <mk-link to="https://www.npmjs.com/package/vue-i18n">
          vue-i18n
        </mk-link> for translations
      </blockquote>
      <p>
        Why inject <code>i18n</code> instance in {{ appName }} ?
      </p>
      <p>
        No <em>wizard mutations</em> nor any <em>dark magic</em>, just to :
      </p>
      <p>
        <ul>
          <li>
            Provide a <mk-link to="/component/link">
              {{ $t('component.link.name') }}
            </mk-link> component
          </li>
          <li>
            Provide library translations through an easy, and documented API
          </li>
        </ul>
      </p>

      <h2>{{ t('app.example') }}</h2>
    </mk-wysiwyg-preview>

    <AppAsyncCodeBlock
      file-path="/code/view/concepts/i18n/setup.ts.hbs"
      :language="CodeLanguage.typescript"
      full-size
    />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

const appName = import.meta.env.VITE_APP_NAME;

const { t } = useI18n();
</script>

<template>
  <div class="pux-RouterSetupView">
    <AppPageTitle>
      {{ $t('view.router.titles.setup') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <blockquote>
          {{ appName }} uses <mk-link to="https://www.npmjs.com/package/vue-router">
            vue-router
          </mk-link> for routing
        </blockquote>
        <p>
          Why inject router instance in {{ appName }} ?
        </p>
        <p>
          No <em>mind control</em> nor any <em>thief trick</em>, just to :
        </p>
        <p>
          <ul>
            <li>
              Provide a <mk-link to="/component/link">
                {{ $t('component.link.name') }}
              </mk-link> component with internal redirects
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h2>{{ $t('app.example') }}</h2>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/concepts/router/setup.ts.hbs"
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

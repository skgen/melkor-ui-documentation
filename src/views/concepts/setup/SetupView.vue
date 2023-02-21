<template>
  <div class="pux-SetupView">
    <AppPageTitle>
      {{ $t('view.setup.titles.setup') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>Install package</h2>
        <p>
          <AppAsyncCodeBlock
            file-path="/code/view/home/install.bash.hbs"
            :language="CodeLanguage.bash"
            full-size
          />
        </p>
      </section>
      <section>
        <h2>Add {{ appName }} to your app</h2>
        <blockquote>
          {{ appName }} integrates <mk-link to="https://www.npmjs.com/package/normalize.css">
            normalize.css
          </mk-link>, no need to import it in your project.
        </blockquote>
        <p>
          <AppAsyncCodeBlock
            file-path="/code/view/home/main.ts.hbs"
            :language="CodeLanguage.typescript"
            full-size
          />
        </p>
      </section>
      <section>
        <h2>Enabling debug mode</h2>
        <p>Debug mode enables log of various informations about the library if needed, such as the list of registered components</p>
        <p>
          <AppAsyncCodeBlock
            file-path="/code/view/home/main-debug.ts.hbs"
            :language="CodeLanguage.typescript"
            full-size
          />
        </p>
      </section>
      <section>
        <h2>Initializing Vue app</h2>
        <p>To enable {{ appName }}, you need to wrap your app with <code>mkt-app</code> component</p>
        <p>
          <AppAsyncCodeBlock
            file-path="/code/view/home/app.vue.hbs"
            :language="CodeLanguage.vue"
            full-size
          />
        </p>
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

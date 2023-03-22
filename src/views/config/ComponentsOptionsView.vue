<template>
  <div class="pux-ComponentsOptionsView">
    <AppPageTitle>
      {{ $t('view.componentsOptions.titles.setup') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('view.componentsOptions.titles.configuration') }}</h2>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/config/components-options/configuration.ts.hbs"
            :language="CodeLanguage.typescript"
            :variables="{ customThemeName: $t('view.theme.paragraph.customThemeName')}"
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

</script>

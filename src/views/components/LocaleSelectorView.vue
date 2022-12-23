<template>
  <div>
    <AppPageTitle>
      {{ $t('component.localeSelector.name') }}
    </AppPageTitle>
    <mk-wysiwyg-preview>
      <h2>{{ $t('app.playground') }}</h2>
      <div>
        <AppSandboxPreview template="/code/view/components/locale-selector/template.hbs">
          <p>
            <em>{{ $t('view.i18n.paragraph.translatedSentence') }}</em>
          </p>
          <mk-locale-selector />
        </AppSandboxPreview>
      </div>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

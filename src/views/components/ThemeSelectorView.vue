<template>
  <div class="pux-ThemeSelectorView">
    <AppPageTitle>
      {{ $t('component.themeSelector.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>
          {{ $t('app.playground') }}
        </h2>
        <div>
          <AppSandboxPreview template="/code/view/components/theme-selector/template.hbs">
            <mk-theme-selector />
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

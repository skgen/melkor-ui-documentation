<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.localeSelector.name') }}</h1>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-locale-selector />
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>

import AppDemoBlock from '@/components/AppDemoBlock.vue';

</script>

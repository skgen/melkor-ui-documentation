<template>
  <AppPageTitle>
    {{ $t(`component.inputFile.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputFileViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputFileViewPlayground from '@/views/components/io/inputFile/InputFileViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

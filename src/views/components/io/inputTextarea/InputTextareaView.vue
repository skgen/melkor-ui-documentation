<template>
  <AppPageTitle>
    {{ $t(`component.inputTextarea.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputTextareaViewPlayground />
    <InputTextareaViewFocusBlur />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputTextareaViewPlayground from '@/views/components/io/inputTextarea/InputTextareaViewPlayground.vue';
import InputTextareaViewFocusBlur from '@/views/components/io/inputTextarea/InputTextareaViewFocusBlur.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

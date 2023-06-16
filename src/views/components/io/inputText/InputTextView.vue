<template>
  <AppPageTitle>
    {{ $t(`component.inputText.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputTextViewPlayground />
    <InputTextViewFocusBlur />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputTextViewPlayground from '@/views/components/io/inputText/InputTextViewPlayground.vue';
import InputTextViewFocusBlur from '@/views/components/io/inputText/InputTextViewFocusBlur.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

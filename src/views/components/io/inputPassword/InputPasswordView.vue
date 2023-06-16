<template>
  <AppPageTitle>
    {{ $t(`component.inputPassword.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputPasswordViewPlayground />
    <InputPasswordViewFocusBlur />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputPasswordViewPlayground from '@/views/components/io/inputPassword/InputPasswordViewPlayground.vue';
import InputPasswordViewFocusBlur from '@/views/components/io/inputPassword/InputPasswordViewFocusBlur.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

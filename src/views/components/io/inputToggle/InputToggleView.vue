<template>
  <AppPageTitle>
    {{ $t(`component.inputToggle.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputToggleViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputToggleViewPlayground from '@/views/components/io/inputToggle/InputToggleViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

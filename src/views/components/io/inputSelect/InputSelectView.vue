<template>
  <AppPageTitle>
    {{ $t(`component.inputSelect.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputSelectViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputSelectViewPlayground from '@/views/components/io/inputSelect/InputSelectViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

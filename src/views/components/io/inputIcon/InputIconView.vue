<template>
  <AppPageTitle>
    {{ $t(`component.inputIcon.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputIconViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputIconViewPlayground from '@/views/components/io/inputIcon/InputIconViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

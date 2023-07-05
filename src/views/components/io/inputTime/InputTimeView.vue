<template>
  <AppPageTitle>
    {{ $t(`component.inputTime.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputTimeViewPlayground />
    <InputTimeEntityView />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputTimeViewPlayground from '@/views/components/io/inputTime/InputTimeViewPlayground.vue';
import InputTimeEntityView from '@/views/components/io/inputTime/InputTimeEntityView.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

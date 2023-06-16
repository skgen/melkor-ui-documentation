<template>
  <AppPageTitle>
    {{ $t(`component.inputCheckbox.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputCheckboxViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputCheckboxViewPlayground from '@/views/components/io/inputCheckbox/InputCheckboxViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

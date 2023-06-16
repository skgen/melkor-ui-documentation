<template>
  <AppPageTitle>
    {{ $t(`component.inputSelect.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputSelectViewPlayground />
    <InputSelectViewComplexTypes />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputSelectViewPlayground from '@/views/components/io/inputSelect/InputSelectViewPlayground.vue';
import InputSelectViewComplexTypes from '@/views/components/io/inputSelect/InputSelectViewComplexTypes.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

<template>
  <AppPageTitle>
    {{ $t(`component.inputRange.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputRangeViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputRangeViewPlayground from '@/views/components/io/inputRange/InputRangeViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

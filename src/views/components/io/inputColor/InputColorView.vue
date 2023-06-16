<template>
  <AppPageTitle>
    {{ $t(`component.inputColor.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputColorViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputColorViewPlayground from '@/views/components/io/inputColor/InputColorViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

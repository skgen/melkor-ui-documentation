<template>
  <AppPageTitle>
    {{ $t(`component.inputRadio.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputRadioViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputRadioViewPlayground from '@/views/components/io/inputRadio/InputRadioViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

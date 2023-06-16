<template>
  <AppPageTitle>
    {{ $t(`component.inputNumber.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputNumberViewPlayground />
    <InputNumberViewFocusBlur />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputNumberViewPlayground from '@/views/components/io/inputNumber/InputNumberViewPlayground.vue';
import InputNumberViewFocusBlur from '@/views/components/io/inputNumber/InputNumberViewFocusBlur.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

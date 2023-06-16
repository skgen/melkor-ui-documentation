<template>
  <AppPageTitle>
    {{ $t(`component.inputDate.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputDateViewPlayground />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputDateViewPlayground from '@/views/components/io/inputDate/InputDateViewPlayground.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

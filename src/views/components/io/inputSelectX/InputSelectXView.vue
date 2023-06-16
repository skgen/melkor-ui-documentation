<template>
  <AppPageTitle>
    {{ $t(`component.inputSelectX.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputSelectXViewPlayground />
    <InputSelectXViewCollection />
    <InputSelectXViewCollectionAdvanced />
    <InputSelectXViewAsyncFocus />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputSelectXViewPlayground from '@/views/components/io/inputSelectX/InputSelectXViewPlayground.vue';
import InputSelectXViewCollection from '@/views/components/io/inputSelectX/InputSelectXViewCollection.vue';
import InputSelectXViewCollectionAdvanced from '@/views/components/io/inputSelectX/InputSelectXViewCollectionAdvanced.vue';
import InputSelectXViewAsyncFocus from '@/views/components/io/inputSelectX/InputSelectXViewAsyncFocus.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

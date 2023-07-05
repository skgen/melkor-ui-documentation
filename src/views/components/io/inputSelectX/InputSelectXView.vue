<template>
  <AppPageTitle>
    {{ $t(`component.inputSelectX.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputSelectXViewPlayground />
    <InputSelectXViewCollection />
    <InputSelectXViewCollectionAdvanced />
    <InputSelectXViewAsyncSearch />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputSelectXViewPlayground from '@/views/components/io/inputSelectX/InputSelectXViewPlayground.vue';
import InputSelectXViewCollection from '@/views/components/io/inputSelectX/InputSelectXViewCollection.vue';
import InputSelectXViewCollectionAdvanced from '@/views/components/io/inputSelectX/InputSelectXViewCollectionAdvanced.vue';
import InputSelectXViewAsyncSearch from '@/views/components/io/inputSelectX/InputSelectXViewAsyncSearch.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

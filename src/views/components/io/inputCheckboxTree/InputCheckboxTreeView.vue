<template>
  <AppPageTitle>
    {{ $t(`component.inputCheckboxTree.name`) }}
  </AppPageTitle>
  <mk-wysiwyg-preview>
    <InputCheckboxTreeViewPlayground />
    <InputCheckboxTreeViewBasicErrorHandling />
    <InputCheckboxTreeViewAdvancedExample />
    <InputCheckboxTreeAdvancedErrorHandling />
    <InputCheckboxTreeUtilities />
  </mk-wysiwyg-preview>
</template>

<script lang="ts" setup>
import InputCheckboxTreeViewPlayground from '@/views/components/io/inputCheckboxTree/InputCheckboxTreeViewPlayground.vue';
import InputCheckboxTreeViewBasicErrorHandling from '@/views/components/io/inputCheckboxTree/InputCheckboxTreeViewBasicErrorHandling.vue';
import InputCheckboxTreeViewAdvancedExample from '@/views/components/io/inputCheckboxTree/InputCheckboxTreeViewAdvancedExample.vue';
import InputCheckboxTreeAdvancedErrorHandling from '@/views/components/io/inputCheckboxTree/InputCheckboxTreeAdvancedErrorHandling.vue';
import InputCheckboxTreeUtilities from '@/views/components/io/inputCheckboxTree/InputCheckboxTreeUtilities.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
</script>

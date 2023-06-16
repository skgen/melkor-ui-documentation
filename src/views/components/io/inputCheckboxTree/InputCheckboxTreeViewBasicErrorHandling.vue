<template>
  <section>
    <h2>Focus on basic error handling</h2>
    <p>
      Every level input in the tree can render a classic error, the same way as any other input in the library.
      It's nothing more but a classic input !
    </p>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-checkbox-tree/errors.hbs"
        :language="CodeLanguage.typescript"
        :variables="{
          errors: {
            global: $t('view.inputCheckboxTree.errors.global'),
            gandalf: $t('view.inputCheckboxTree.errors.gandalf'),
            sauron: $t('view.inputCheckboxTree.errors.sauron'),
          }
        }"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  CodeLanguage,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
</script>

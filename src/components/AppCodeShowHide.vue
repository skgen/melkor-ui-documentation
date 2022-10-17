<template>
  <div class="pux-AppCodeShowHide">
    <mk-tabs v-model="index">
      <mk-tab value="show">
        <strong>{{ index === 'show' ? 'Cacher code' : 'Afficher code' }}</strong>
      </mk-tab>
    </mk-tabs>
    <mk-layers v-model="index">
      <mk-layer value="show">
        <slot />
      </mk-layer>
    </mk-layers>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const index = ref('hide');
</script>

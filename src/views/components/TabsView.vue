<template>
  <div class="pux-TabsView">
    <mk-wysiwyg-preview>
      <h1>{{ t('component.tabs.name') }}</h1>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-tabs v-model="index">
        <mk-tab value="1">
          Light theme
        </mk-tab>
        <mk-tab value="2">
          Dark Theme
        </mk-tab>
        <mk-tab value="3">
          System theme
        </mk-tab>
      </mk-tabs>
      <mk-layers v-model="index">
        <mk-layer value="1">
          Layer 1
        </mk-layer>
        <mk-layer value="2">
          Layer 2
        </mk-layer>
        <mk-layer value="3">
          Layer 3
        </mk-layer>
      </mk-layers>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const index = ref('1');
</script>

<style lang="scss">
.pux-TabsView {
    .mk-AppLayer {
        padding: 40px;
        font-size: 40px;
        border: 1px solid var(--app-border-color);
    }
}
</style>

<template>
  <div class="mk-TooltipView">
    <mk-wysiwyg-preview>
      <h1>{{ t('component.tooltip.name') }}</h1>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-tooltip>
        <mk-link to="/">
          Homepage Link
        </mk-link>
        <template #tooltip>
          If you click me, you'll leave this page !
        </template>
      </mk-tooltip>
    </AppDemoBlock>
    <AppDemoBlock>
      <mk-menu
        v-model="menu"
        auto-hide
      >
        <mk-button @click="() => menu = !menu">
          {{ menu ? 'Close menu' : 'Open menu' }}
        </mk-button>
        <template #menu>
          <div class="mk-TooltipView-menu">
            <mk-wysiwyg-preview>
              <p>I'm a menu</p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </mk-wysiwyg-preview>
          </div>
        </template>
      </mk-menu>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const menu = ref(false);

</script>

<style lang="scss">
.mk-TooltipView {
    &-menu {
        max-width: 200px;
        padding: 20px;

        // background: var(--app-background-color);
        // border: 1px solid var(--app-border-color);
    }
}
</style>

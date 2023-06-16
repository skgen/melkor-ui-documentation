<template>
  <div class="pux-AppInputStatePreview">
    <div class="pux-AppInputTitlePreview-ctas">
      <mk-button @click="() => { modal = !modal; }">
        <slot name="default">
          {{ $t('app.viewState') }}
        </slot>
      </mk-button>
      <slot name="ctas" />
    </div>

    <mk-fullscreen-modal
      v-model="modal"
      center
    >
      <template #transition="{ active }">
        <transition name="view-fade">
          <AppCodeBlock
            v-if="active"
            :code="JSON.stringify(props.state, null, 2)"
            :language="CodeLanguage.json"
          />
        </transition>
      </template>
    </mk-fullscreen-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

type Props = {
  state: unknown;
};

const props = defineProps<Props>();

const modal = ref(false);
</script>

<style lang="scss">
.pux-AppInputStatePreview {
    &-ctas {
        display: flex;
        gap: var(--app-m-1);
    }
}
</style>

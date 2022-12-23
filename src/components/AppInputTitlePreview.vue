<template>
  <div class="pux-AppInputTitlePreview">
    <AppPageTitle>
      {{ $t(`component.${props.i18nKey}.name`) }}
    </AppPageTitle>
    <div class="pux-AppInputTitlePreview-ctas">
      <mk-button @click="() => { modal = !modal; }">
        {{ $t('app.viewState') }}
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
import type { InputState } from '@patriarche/melkor';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import { CodeLanguage } from '@/lib/definition';

type Props = {
  i18nKey: string;
  state: InputState<any>;
};

const props = defineProps<Props>();

const modal = ref(false);
</script>

<style lang="scss">
.pux-AppInputTitlePreview {
    margin-bottom: var(--app-m-3);

    &-ctas {
        display: flex;
        gap: var(--app-m-1);
    }
}
</style>

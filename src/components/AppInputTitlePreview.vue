<template>
  <div class="pux-AppInputTitlePreview">
    <mk-wysiwyg-preview>
      <h1>
        {{ $t(`component.${props.i18nKey}.name`) }}
      </h1>
      <mk-button @click="() => { modal = !modal; }">
        {{ $t('app.viewState') }}
      </mk-button>
    </mk-wysiwyg-preview>

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

<script lang="ts" setup>import type { InputState } from '@patriarche/melkor';
import { ref } from 'vue';

import AppCodeBlock from '@/components/AppCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

type Props = {
  i18nKey: string;
  state: InputState<any>;
};

const props = defineProps<Props>();

const modal = ref(false);
</script>

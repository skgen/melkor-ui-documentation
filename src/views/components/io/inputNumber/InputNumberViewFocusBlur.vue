<template>
  <section>
    <h2>Focus / Blur</h2>
    <div>
      <AppDemoToolbar>
        <mk-button
          outlined
          @click="() => input?.focus()"
        >
          Focus
        </mk-button>
        <mk-button
          outlined
          @click="() => input?.blur()"
        >
          Blur
        </mk-button>
      </AppDemoToolbar>
    </div>
    <div>
      <AppDemoBlock>
        <div>
          <mk-input-number
            ref="input"
            v-model="state"
          />
        </div>
      </AppDemoBlock>
    </div>
    <div>
      <AppAsyncCodeBlock file-path="/code/view/components/io/input-number/focus-blur.ts.hbs" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  AppInputNumber, createInputState, type InputState, type NumberInputValue,
} from '@patriarche/melkor';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppDemoToolbar from '@/components/AppDemoToolbar.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';

const state = ref<InputState<NumberInputValue>>(createInputState({
  value: null,
}));

const input = ref<typeof AppInputNumber | null>(null);
</script>

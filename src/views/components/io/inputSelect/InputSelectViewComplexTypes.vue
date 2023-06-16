<template>
  <section>
    <h2>Complex types</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppDemoBlock>
        <div>
          <mk-input-select
            v-model="state"
            :options="options"
            :validate="validate"
          >
            <template #option="{ option }">
              <template v-if="!option.value">
                -----
              </template>
              <template v-else>
                {{ option.value.name }}
              </template>
            </template>
          </mk-input-select>
        </div>
      </AppDemoBlock>
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-select/complex-types.ts.hbs"
      />
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-select/complex-types.vue.hbs"
        :language="CodeLanguage.vue"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  createInputState,
  type InputState,
  type SelectInputOption,
} from '@patriarche/melkor';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import { CodeLanguage } from '@/lib/definition';

type SelectInputValue = { name: string; race: 'ainur' | 'elf' } | null;

function validate(value: SelectInputValue) {
  return value === null ? 'Required' : null;
}

const options: SelectInputOption<SelectInputValue>[] = [
  { value: null },
  { value: { name: 'Melkor', race: 'ainur' } },
  { value: { name: 'Celebrimbor', race: 'elf' } },
  { value: { name: 'Manwë', race: 'ainur' }, disabled: true },
  { value: { name: 'Glorfindel', race: 'elf' } },
];

const state = ref<InputState<SelectInputValue>>(
  createInputState({
    value: options[1].value,
  }),
);
</script>

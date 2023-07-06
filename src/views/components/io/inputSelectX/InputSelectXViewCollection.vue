<template>
  <section>
    <h2>Collection + Complex types</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppDemoBlock>
        <div style="display: flex;">
          <mk-input-select-x
            v-model="state"
            :options="options"
            cancelable
          >
            <template #option-label="{ option }">
              {{ option.value.name }}
            </template>
            <template #values="{ selection }">
              {{ selection.map((entry: Character) => entry.name).join(', ') }}
            </template>
          </mk-input-select-x>
        </div>
      </AppDemoBlock>
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-select-x/collection.ts.hbs"
      />
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-select-x/collection.vue.hbs"
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
  type SelectXInputOption,
} from '@patriarche/melkor';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import { CodeLanguage } from '@/lib/definition';

type Character = { name: string; race: 'ainur' | 'elf' };
type SelectXInputOptionValue = Character;
type SelectXInputValue = SelectXInputOptionValue[];

const options: SelectXInputOption<SelectXInputOptionValue>[] = [
  { value: { name: 'Melkor', race: 'ainur' } },
  { value: { name: 'Celebrimbor', race: 'elf' } },
  { value: { name: 'Manwë', race: 'ainur' }, disabled: true },
  { value: { name: 'Glorfindel', race: 'elf' } },
];

const state = ref<InputState<SelectXInputValue>>(
  createInputState({
    value: [options[1].value, options[2].value],
  }),
);

</script>

<style lang="scss">
.pux-InputSelectXViewCollection {
    &-tile {
        display: flex;
        gap: var(--app-m-1);
        align-items: center;
        padding-left: calc(var(--app-m-1) / 2);
        overflow: hidden;
        background-color: rgb(var(--app-primary-tone-color) / 0.2);
        border: 1px solid var(--app-primary-color);
        border-radius: var(--app-border-radius);

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            padding: 0;
            cursor: pointer;
            transition: background-color var(--app-transition-duration-background);

            &:hover {
                background-color: rgb(var(--app-primary-tone-color) / 0.2);
            }
        }
    }
}
</style>

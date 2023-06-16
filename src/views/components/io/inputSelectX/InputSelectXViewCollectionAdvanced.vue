<template>
  <section>
    <h2>Collection Advanced</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppDemoBlock>
        <div style="display: flex;">
          <mk-input-select-x
            v-model="state"
            :options="options"
          >
            <template #option-label="{ option }">
              {{ option.value.name }}
            </template>
            <template #values="{ selection }">
              <div
                v-for="(entry, index) of selection"
                :key="index"
                class="pux-InputSelectXViewCollection-tile"
              >
                <span>{{ entry.name }}</span>
                <button @click.stop="() => handleRemove(entry)">
                  <mk-icon icon="close" />
                </button>
              </div>
            </template>
          </mk-input-select-x>
        </div>
      </AppDemoBlock>
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-select-x/collection-advanced.vue.hbs"
        :language="CodeLanguage.vue"
      />
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-select-x/collection-advanced.ts.hbs"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  createInputState,
  validateInputState,
  type InputState,
  type SelectXInputOption,
} from '@patriarche/melkor';
import { isEqual } from 'lodash';
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

function handleRemove(valueToRemove: SelectXInputOptionValue) {
  state.value = validateInputState({
    ...state.value,
    value: state.value.value.filter((valueEntry) => !isEqual(valueEntry, valueToRemove)),
  });
}

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

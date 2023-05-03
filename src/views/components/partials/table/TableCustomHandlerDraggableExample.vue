<template>
  <h3 id="draggable-custom-handler">
    {{ $t('view.table.titles.draggable.custom') }}
  </h3>
  <div>
    <AppDemoBlock>
      <mk-table
        v-model:items="items"
        :headers="headers"
        :draggable="draggableOptions"
      >
        <template #drag>
          <mk-button
            outlined
            data-custom-draggable-cta
          >
            <mk-icon icon="drag_indicator" />
          </mk-button>
        </template>
      </mk-table>
    </AppDemoBlock>
  </div>
  <div>
    <AppAsyncCodeBlock
      file-path="/code/view/components/table/draggable-custom-handler/example.vue.hbs"
      :language="CodeLanguage.vue"
    />
  </div>
  <div>
    <AppAsyncCodeBlock
      file-path="/code/view/components/table/draggable-custom-handler/example.ts.hbs"
      :language="CodeLanguage.typescript"
    />
  </div>
</template>

<script lang="ts" setup>
import type { TableHeader, TableDraggableOptions } from '@patriarche/melkor';
import { ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

type TableItemValue = {
  drag?: never;
  name: string;
  race: string;
  maxAge: number;
};

type TableHeaderValue = string;

const headers: TableHeader<TableItemValue, TableHeaderValue>[] = [
  { key: 'drag' },
  { value: 'Hero name', key: 'name' },
  { value: 'Race', key: 'race' },
  { value: 'Max age', key: 'maxAge' },
];

const items = ref<TableItemValue[]>([
  {
    name: 'Melkor', race: 'Ainur', maxAge: Infinity,
  },
  {
    name: 'Elrond', race: 'Elf', maxAge: Infinity,
  },
  {
    name: 'Aragorn', race: 'Human', maxAge: 210,
  },
]);

const draggableOptions: TableDraggableOptions<TableItemValue> = {
  itemKey: 'name',
  handle: '[data-custom-draggable-cta]',
};
</script>

<style lang="scss">
.pux-TableCustomHandlerDraggableExample {
    &-demo {
        .mk-AppTable {
            .mk-AppTableCell[data-key="drag"] {
                width: 0;

                .mk-AppButton {
                    --mk-button-cursor: move;
                }
            }
        }
    }
}
</style>

<template>
  <h3 id="draggable-basic">
    {{ $t('view.table.titles.draggable.basic') }}
  </h3>
  <div>
    <AppDemoBlock>
      <mk-table
        v-model:items="items"
        :headers="headers"
        :draggable="draggableOptions"
      />
    </AppDemoBlock>
  </div>
  <div>
    <AppAsyncCodeBlock
      file-path="/code/view/components/table/draggable-basic/example.vue.hbs"
      :language="CodeLanguage.vue"
    />
  </div>

  <div>
    <AppAsyncCodeBlock
      file-path="/code/view/components/table/draggable-basic/example.ts.hbs"
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
  name: string;
  race: string;
  maxAge: number;
};

type TableHeaderValue = string | null;

const headers: TableHeader<TableItemValue, TableHeaderValue>[] = [
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
};
</script>

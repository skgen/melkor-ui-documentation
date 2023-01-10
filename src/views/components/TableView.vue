<template>
  <div class="pux-TableView">
    <AppPageTitle>
      {{ $t('component.table.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/table/template.hbs"
            script="/code/view/components/table/script.hbs"
            scss="/code/view/components/table/scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-table
                v-bind="attributes.props"
                :style="style"
              />
            </template>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TableHeader, TableKey } from '@patriarche/melkor';
import AppPageTitle from '@/components/AppPageTitle.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';

type TableItemValue = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  iron: string;
};

const headers: TableHeader<TableItemValue>[] = [
  { text: 'Dessert (100g serving)', value: 'name' },
  { text: 'Calories', value: 'calories' },
  { text: 'Fat (g)', value: 'fat' },
  { text: 'Carbs (g)', value: 'carbs' },
  { text: 'Protein (g)', value: 'protein' },
  { text: 'Iron (%)', value: 'iron' },
];

const items = ref<TableItemValue[]>([
  {
    id: 'id-1', name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%',
  },
  {
    id: 'id-2', name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%',
  },
  {
    id: 'id-3', name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%',
  },
  {
    id: 'id-4', name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%',
  },
  {
    id: 'id-5', name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%',
  },
  {
    id: 'id-6', name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%',
  },
  {
    id: 'id-7', name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%',
  },
  {
    id: 'id-8', name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%',
  },
  {
    id: 'id-9', name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%',
  },
  {
    id: 'id-10', name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%',
  },
]);

const sortableKeys: TableKey<TableItemValue>[] = ['__index', 'calories', 'carbs'];
const hiddenKeys: TableKey<TableItemValue>[] = ['id'];

const definition: ComponentDefinition = {
  props: {
    headers: {
      type: AttributeType.reference,
      required: false,
      default: headers,
    },
    items: {
      type: AttributeType.reference,
      required: true,
      default: items.value,
    },
    indexRows: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    sortableKeys: {
      type: AttributeType.reference,
      required: false,
      default: sortableKeys,
    },
    hiddenKeys: {
      type: AttributeType.reference,
      required: false,
      default: hiddenKeys,
    },
  },
};

const attributes = ref<ComponentAttributes>({
  props: {
    items: items.value,
  },
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
}
</script>

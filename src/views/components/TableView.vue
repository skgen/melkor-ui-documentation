<template>
  <div class="pux-TableView">
    <AppPageTitle>
      {{ $t('component.table.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2
          id="playground"
          v-anchor
        >
          {{ $t('app.playground') }}
        </h2>

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
                v-if="playgroundReady"
                v-bind="attributes.props"
                v-model:items="items"
                :style="style"
              />
            </template>
          </AppSandboxPreview>
        </div>
      </section>
      <TableCustomSlotsExample />
      <section>
        <h2>
          {{ $t('view.table.titles.draggable.block') }}
        </h2>
        <TableBasicDraggableExample />
        <TableCustomHandlerDraggableExample />
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { TableHeader, TableKey } from '@patriarche/melkor';
import { useI18n } from 'vue-i18n';
import AppPageTitle from '@/components/AppPageTitle.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import TableCustomSlotsExample from '@/views/components/partials/table/TableCustomSlotsExample.vue';
import TableBasicDraggableExample from '@/views/components/partials/table/TableBasicDraggableExample.vue';
import TableCustomHandlerDraggableExample from '@/views/components/partials/table/TableCustomHandlerDraggableExample.vue';
import useAsideNavigationContext from '@/composables/useAsideNavigationContext';

const { t } = useI18n();
const { setNavigation } = useAsideNavigationContext();

onMounted(() => {
  setNavigation([
    {
      title: t('app.playground'),
      to: '/component/table#playground',
    },
    {
      title: t('view.table.titles.customTemplate.block'),
      children: [
        {
          title: t('view.table.titles.customTemplate.logic'),
          to: '/component/table#custom-templates',
        },
        {
          title: t('view.table.titles.customTemplate.static'),
          to: '/component/table#custom-templates-static',
        },
        {
          title: t('view.table.titles.customTemplate.dynamic'),
          to: '/component/table#custom-templates-dynamic',
        },
      ],
    },
    {
      title: t('view.table.titles.draggable.block'),
      children: [
        {
          title: t('view.table.titles.draggable.basic'),
          to: '/component/table#draggable-basic',
        },
        {
          title: t('view.table.titles.draggable.custom'),
          to: '/component/table#draggable-custom-handler',
        },
      ],
    },
  ]);
});

type TableItemValue = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  iron: string;
};

type TableHeaderValue = string;

const headers: TableHeader<TableItemValue, TableHeaderValue>[] = [
  { value: 'Dessert (100g serving)', key: 'name' },
  { value: 'Calories', key: 'calories' },
  { value: 'Fat (g)', key: 'fat' },
  { value: 'Carbs (g)', key: 'carbs' },
  { value: 'Protein (g)', key: 'protein' },
  { value: 'Iron (%)', key: 'iron' },
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

const playgroundReady = ref(false);

const definition: ComponentDefinition = {
  props: {
    headers: {
      type: AttributeType.vModel,
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
    activeColumn: {
      type: AttributeType.select,
      required: false,
      default: undefined,
      inputOptions: {
        options: [
          { label: '-----', value: undefined },
          { label: 'Index', value: '__index' },
          ...headers.map((header) => ({ label: header.value, value: header.key })),
        ],
      },
    },
    draggable: {
      type: AttributeType.reference,
      required: false,
      default: undefined,
    },
  },
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  const { items: newItems, ...otherProps } = newAttributes.props;
  attributes.value = {
    ...newAttributes,
    props: otherProps,
  };
  items.value = newItems;
  playgroundReady.value = true;
}
</script>

<template>
  <div class="pux-TableView">
    <mk-wysiwyg-preview>
      <h1>{{ t('component.table.name') }}</h1>
    </mk-wysiwyg-preview>
    <mk-table v-bind="table">
      <template #protein="{ data }">
        <div class="pux-TableView-pin">
          {{ data }}
        </div>
      </template>
      <template #modal="{ pos: [x], entry }">
        <!-- <mk-button @click="() => handleSettings(x)">
          <mk-icon icon="settings" />
        </mk-button> -->
        <!-- <mk-fullscreen-modal
          :model-value="currentSettings === x"
          center
        >
          <template #transition="{ active }">
            <transition name="view-fade">
              <div v-if="active">
                <mk-button @click="() => handleSettings(x)">
                  <mk-icon icon="close" />
                  <AppCodeBlock
                    :code="JSON.stringify(entry, null, 2)"
                    :language="CodeLanguage.json"
                  />
                </mk-button>
              </div>
            </transition>
          </template>
        </mk-fullscreen-modal> -->
        <mk-menu
          auto-hide
          :model-value="currentSettings === x"
          placement="top"
          @update:model-value="handleResetSettings"
        >
          <mk-button @click="() => handleSettings(x)">
            <mk-icon icon="settings" />
          </mk-button>
          <template #menu>
            <AppCodeBlock
              :code="JSON.stringify(entry, null, 2)"
              :language="CodeLanguage.json"
            />
          </template>
        </mk-menu>
      </template>
    </mk-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { TableProps } from '@patriarche/melkor';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

const { t } = useI18n();

const table: TableProps = {
  headers: [
    { text: 'Dessert (100g serving)', value: 'name' },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
    { text: 'Settings', value: 'modal' },
  ],
  items: [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1%',
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1%',
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: '7%',
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: '8%',
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: '16%',
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0%',
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: '2%',
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: '45%',
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: '22%',
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: '6%',
    },
  ],
  options: {
    indexColumns: true,
  },
};

const currentSettings = ref<number | null>(null);

function handleSettings(x: number) {
  if (x === currentSettings.value) {
    currentSettings.value = null;
  } else {
    requestAnimationFrame(() => {
      currentSettings.value = x;
    });
  }
}

function handleResetSettings() {
  currentSettings.value = null;
}

</script>

<style lang="scss">
.pux-TableView {
    &-pin {
        --pux-table-view-pin-background-color: var(--app-primary-color);

        display: inline-block;
        min-width: 50px;
        padding: 2px 8px;
        color: var(--app-text-color-on-primary);
        text-align: center;
        background-color: var(--pux-table-view-pin-background-color);
        border-radius: 50px;
    }

    [data-target="true"] {
        .pux-TableView-pin {
            // --pux-table-view-pin-background-color: var(--app-primary-color);
        }
    }
}
</style>

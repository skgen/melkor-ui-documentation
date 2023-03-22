<template>
  <div class="pux-TableView">
    <AppPageTitle>
      {{ $t('component.tableCell.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <AppVirtualComponentDoc>
          {{ $t('component.tableCell.name') }}
          <template #component>
            {{ `<mk-table-cell />` }}
          </template>
        </AppVirtualComponentDoc>
      </section>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            scss="/code/view/components/table-cell/playground.scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <table
                v-theme="theme"
                class="mk-AppTable"
              >
                <tbody class="mk-AppTable-body">
                  <mk-table-row>
                    <mk-table-cell
                      v-bind="attributes.props"
                      :style="style"
                    >
                      {{ appName }}
                    </mk-table-cell>
                  </mk-table-row>
                </tbody>
              </table>
            </template>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTheme } from '@patriarche/melkor';
import AppPageTitle from '@/components/AppPageTitle.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppVirtualComponentDoc from '@/components/AppVirtualComponentDoc.vue';
import { createScssControllersConfig } from '@/lib/utils';

const appName = import.meta.env.VITE_APP_NAME;

const { theme } = useTheme();

const definition: ComponentDefinition = {
  props: {
    header: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    xKey: {
      type: AttributeType.string,
      required: false,
      default: null,
    },
    x: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
    y: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
    isCurrent: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isCurrentX: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isCurrentY: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isFilteredX: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isTarget: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    hasTarget: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isTopTarget: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isRightTarget: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isLeftTarget: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isBottomTarget: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    isOdd: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-table-cell-background-color-active',
    '--mk-table-cell-background-color-highlighted',
    '--mk-table-cell-border-color-active',
    '--mk-table-cell-border-color-highlighted',
    '--mk-table-cell-header-background-color-highlighted',
    '--mk-table-cell-header-border-color',
    '--mk-table-cell-background-color',
    '--mk-table-cell-border-color',
    '--mk-table-cell-header-background-color',
    '--mk-table-cell-padding-x',
    '--mk-table-cell-padding-y',
    '--mk-table-cell-row-odd-background-color',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
}
</script>

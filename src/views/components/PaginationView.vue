<template>
  <div>
    <AppPageTitle>
      {{ $t('component.pagination.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            ref="sandbox"
            :definition="definition"
            template="/code/view/components/pagination/playground.vue.hbs"
            script="/code/view/components/pagination/playground.ts.hbs"
            scss="/code/view/components/pagination/playground.scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-pagination
                v-if="playgroundReady"
                v-model="page"
                v-bind="attributes.props"
                :style="style"
              >
                <template
                  v-if="attributes.slots['prev-icon']"
                  #prev-icon
                >
                  <mk-icon icon="arrow_back" />
                </template>
                <template
                  v-if="attributes.slots['next-icon']"
                  #next-icon
                >
                  <mk-icon icon="arrow_forward" />
                </template>
              </mk-pagination>
            </template>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
} from 'vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import { AttributeType, type ComponentAttributes, type ComponentDefinition } from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig } from '@/lib/utils';

const page = ref(5);
const range = ref([1, 10]);

const playgroundReady = ref(false);
const sandbox = ref<(typeof AppSandboxPreview) | null>(null);

const definition: ComponentDefinition = {
  props: {
    page: {
      type: AttributeType.vModel,
      required: true,
      default: page,
    },
    range: {
      type: AttributeType.reference,
      required: true,
      default: range,
    },
    gap: {
      type: AttributeType.number,
      required: false,
      default: null,
      componentDefault: 1,
    },
  },
  slots: createSlotsControllersConfig([
    'prev-icon',
    'next-icon',
  ]),
  scss: createScssControllersConfig([
    '--mk-pagination-background-color-active',
    '--mk-pagination-border-color',
    '--mk-pagination-border-color-active',
    '--mk-pagination-border-radius',
    '--mk-pagination-border-width',
    '--mk-pagination-slot-size',
    '--mk-pagination-transition-duration',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  const { page: newPage, ...otherProps } = newAttributes.props;
  attributes.value = {
    ...newAttributes,
    props: otherProps,
  };
  playgroundReady.value = true;
}

</script>

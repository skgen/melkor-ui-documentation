<!-- eslint-disable max-len -->
<template>
  <div class="pux-ImageView">
    <mk-wysiwyg-preview>
      <h1>{{ t('component.image.name') }}</h1>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <h2>{{ t('app.interactiveView') }}</h2>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/image.txt"
      @props-change="handlePropsChange"
    >
      <mk-image
        v-bind="componentProps"
        :ratio="[1,1]"
      />
    </AppSandboxPreview>

    <mk-wysiwyg-preview>
      <h2>{{ t('app.examples') }}</h2>
    </mk-wysiwyg-preview>

    <div class="pux-ImageView-cell pux-ImageView-cover">
      <mk-wysiwyg-preview>
        <h3>{{ t('view.image.default') }}</h3>
      </mk-wysiwyg-preview>
      <AppDemoBlock>
        <mk-image src="/images/landscape.jpeg" />
      </AppDemoBlock>
    </div>

    <div
      class="pux-ImageView-grid"
    >
      <div
        v-for="(cell, index) in cells"
        :key="index"
        class="pux-ImageView-cell"
      >
        <mk-wysiwyg-preview>
          <p>
            <i18n-t
              :keypath="`view.image.description.${cell.contain || cell.cover ? 'ratioAndFit' : 'ratio'}`"
              scope="global"
            >
              <template #ratio>
                <code>{{ `${cell.ratio[0]}:${cell.ratio[1]}` }}</code>
              </template>
              <template #fit>
                <code>{{ cell.contain ? 'contain' : 'cover' }}</code>
              </template>
            </i18n-t>
          </p>
        </mk-wysiwyg-preview>
        <AppDemoBlock>
          <mk-image
            :src="imageSource"
            :ratio="cell.ratio"
            :cover="cell.cover"
            :contain="cell.contain"
          />
        </AppDemoBlock>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { reactive, ref } from 'vue';
import { PropType, type ComponentProps, type PropsDefinition } from '@/lib/definition';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';

const { t } = useI18n();

const imageSource = '/images/landscape.jpeg';

// @todo Add ratio prop with array
const definition: PropsDefinition = reactive({
  src: {
    type: PropType.string,
    required: false,
    default: imageSource,
  },
  alt: {
    type: PropType.string,
    required: false,
    default: '',
  },
  title: {
    type: PropType.string,
    required: false,
    default: '',
  },
  cover: {
    type: PropType.boolean,
    required: false,
    default: true,
  },
  contain: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
});

const componentProps = ref({});

function handlePropsChange(newProps: ComponentProps) {
  componentProps.value = newProps;
}

const cells = [
  {
    ratio: [1, 1],
  },
  {
    ratio: [1, 1],
    cover: true,
  },
  {
    ratio: [1, 1],
    contain: true,
  },
  {
    ratio: [4, 3],
  },
  {
    ratio: [4, 3],
    cover: true,
  },
  {
    ratio: [4, 3],
    contain: true,
  },
  {
    ratio: [16, 9],
  },
  {
    ratio: [16, 9],
    cover: true,
  },
  {
    ratio: [16, 9],
    contain: true,
  },
  {
    ratio: [2, 3],
  },
  {
    ratio: [2, 3],
    cover: true,
  },
  {
    ratio: [2, 3],
    contain: true,
  },
];

</script>

<style lang="scss">
.pux-ImageView {
    > * {
        margin: 32px 0;
    }

    &-cover {
        width: 600px;
        max-width: 100%;
    }

    &-grid {
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 32px;
    }

    &-cell {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
}
</style>

<template>
  <div class="pux-ImageView">
    <AppPageTitle>
      {{ $t('component.image.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/image/template.hbs"
            script="/code/view/components/image/script.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-image
                v-bind="attributes.props"
                :style="style"
              />
            </template>
          </AppSandboxPreview>
        </div>
      </section>
      <section>
        <h2>{{ $t('app.examples') }}</h2>
        <div>
          <div class="pux-ImageView-cell pux-ImageView-cover">
            <mk-wysiwyg-preview>
              <p>{{ $t('view.image.default') }}</p>
              <div>
                <AppDemoBlock>
                  <mk-image :src="imageSource" />
                </AppDemoBlock>
              </div>
            </mk-wysiwyg-preview>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div class="pux-ImageView-grid">
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
                <div>
                  <AppDemoBlock>
                    <mk-image
                      :src="imageSource"
                      :ratio="cell.ratio"
                      :cover="cell.cover"
                      :contain="cell.contain"
                    />
                  </AppDemoBlock>
                </div>
              </mk-wysiwyg-preview>
            </div>
          </div>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';

const imageSource = '/images/moria-baraddur.jpeg';

const ratio = [4, 3];

const definition: ComponentDefinition = {
  props: {
    src: {
      type: AttributeType.string,
      required: false,
      default: imageSource,
    },
    ratio: {
      type: AttributeType.reference,
      required: false,
      default: ratio,
    },
    alt: {
      type: AttributeType.string,
      required: false,
      default: '',
    },
    title: {
      type: AttributeType.string,
      required: false,
      default: '',
    },
    cover: {
      type: AttributeType.boolean,
      required: false,
      default: true,
    },
    contain: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
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
    &-cover {
        width: 600px;
        max-width: 100%;
    }

    &-grid {
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--app-m-4);
    }
}
</style>

<template>
  <div class="mk-SkeletonView">
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.skeleton.name') }}</h1>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/skeleton/template.txt"
      @change="handlePreviewChange"
    >
      <mk-skeleton v-bind="attributes.props" />
    </AppSandboxPreview>

    <mk-wysiwyg-preview>
      <h2>{{ $t('app.examples') }}</h2>
    </mk-wysiwyg-preview>

    <AppDemoBlock>
      <div
        class="mk-SkeletonView-rows"
        data-gap="lg"
      >
        <div
          class="mk-SkeletonView-cols"
          data-gap="lg"
        >
          <div class="mk-SkeletonView-rows">
            <mk-skeleton height="20px" />
            <mk-skeleton height="20px" />
            <mk-skeleton height="20px" />
          </div>
          <mk-skeleton
            circle
            size="80px"
          />
          <div class="mk-SkeletonView-rows">
            <mk-skeleton height="80px" />
          </div>
        </div>
        <div class="mk-SkeletonView-rows">
          <mk-skeleton height="10px" />
          <mk-skeleton height="10px" />
          <mk-skeleton height="10px" />
          <mk-skeleton height="10px" />
          <mk-skeleton height="10px" />
        </div>
      </div>
    </AppDemoBlock>

    <AppDemoBlock>
      <div
        class="mk-SkeletonView-rows"
        data-gap="lg"
      >
        <div
          class="mk-SkeletonView-cols"
          data-gap="lg"
        >
          <mk-skeleton size="80px" />
          <div class="mk-SkeletonView-rows">
            <mk-skeleton height="40px" />
            <mk-skeleton
              height="10px"
              width="50%"
            />
          </div>
        </div>

        <div class="mk-SkeletonView-rows">
          <mk-skeleton height="10px" />
          <mk-skeleton height="10px" />
          <mk-skeleton height="10px" />
        </div>
      </div>
    </AppDemoBlock>

    <AppDemoBlock>
      <div
        class="mk-SkeletonView-rows"
        data-gap="lg"
      >
        <div class="mk-SkeletonView-rows">
          <mk-skeleton
            height="20px"
            width="40%"
          />
          <mk-skeleton height="5px" />
        </div>
        <div class="mk-SkeletonView-rows">
          <div class="mk-SkeletonView-cols">
            <mk-skeleton
              height="15px"
              width="10%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="30%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
          </div>
          <div class="mk-SkeletonView-cols">
            <mk-skeleton
              height="15px"
              width="10%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="30%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
          </div>
          <div class="mk-SkeletonView-cols">
            <mk-skeleton
              height="15px"
              width="10%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="30%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
          </div>
          <div class="mk-SkeletonView-cols">
            <mk-skeleton
              height="15px"
              width="10%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="30%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
          </div>
          <div class="mk-SkeletonView-cols">
            <mk-skeleton
              height="15px"
              width="10%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="30%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
            <mk-skeleton
              height="15px"
              width="20%"
            />
          </div>
        </div>
      </div>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';

import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';

const definition: ComponentDefinition = reactive({
  props: {
    circle: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    width: {
      type: AttributeType.string,
      required: false,
      default: '200px',
    },
    height: {
      type: AttributeType.string,
      required: false,
      default: '50px',
    },
    size: {
      type: AttributeType.string,
      required: false,
      default: '',
    },
  },
});

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
}
</script>

<style lang="scss">
.mk-SkeletonView {
    &-rows {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 10px;
    }

    &-cols {
        display: flex;
        flex: 1;
        flex-direction: row;
        gap: 10px;
    }

    &-rows,
    &-cols {
        &[data-gap="lg"] {
            gap: 20px;
        }
    }
}
</style>

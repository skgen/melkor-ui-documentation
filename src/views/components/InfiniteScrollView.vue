<template>
  <div class="pux-InfiniteScrollView">
    <AppPageTitle>
      {{ $t('component.infiniteScroll.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/infinite-scroll/playground.vue.hbs"
            :template-variables="{
              list: '<!-- List render -->'
            }"
            script="/code/view/components/infinite-scroll/playground.ts.hbs"
            :template-tabs-depth="2"
            @change="handlePreviewChange"
          >
            <template #preview-toolbar>
              <div class="pux-InfiniteScrollView-preview">
                <div class="pux-InfiniteScrollView-preview-cta">
                  <mk-button
                    text
                    @click="playgroundId = Math.random();"
                  >
                    Regenerate component
                  </mk-button>
                  <mk-button
                    text
                    @click="reset"
                  >
                    Reset list
                  </mk-button>
                  <mk-button
                    :outlined="!debugMode"
                    @click="debugMode = !debugMode"
                  >
                    Debug Mode
                  </mk-button>
                </div>
                <AppSpinner v-if="loading" />
              </div>
            </template>
            <template #default="{ style }">
              <div
                v-if="playgroundReady"
                :style="{ height: '400px' }"
                :data-debug="debugMode"
              >
                <mk-infinite-scroll
                  v-bind="attributes.props"
                  :key="playgroundId"
                  :style="style"
                  @infinite="handleInfinite"
                >
                  <AppGridList :list="list">
                    <template #item="{ item }">
                      {{ item }}
                    </template>
                  </AppGridList>
                </mk-infinite-scroll>
              </div>
            </template>
          </AppSandboxPreview>
        </div>
        <div>
          <mk-alert warning>
            If <code>scrollable</code> prop is set to <code>true</code>, you <strong>MUST</strong>
            provide a defined <i>height</i> to the element wrapping your <code>{{ `<mk-infinite-scroll />` }}</code> component
          </mk-alert>
        </div>
      </section>
      <InfiniteScrollWindowExample />
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { VerticalDirection } from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppGridList from '@/components/AppGridList.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import InfiniteScrollWindowExample from '@/views/components/partials/infiniteScroll/InfiniteScrollWindowExample.vue';
import useMockList from '@/composables/useMockList';
import { AttributeType, type ComponentAttributes, type ComponentDefinition } from '@/lib/definition';

const playgroundReady = ref(false);
const playgroundId = ref(Math.random());

const definition: ComponentDefinition = {
  props: {
    top: {
      type: AttributeType.boolean,
      required: false,
      default: false,
      componentDefault: false,
      inputOptions: {
        hint: 'Toggle top scrolling listening',
      },
    },
    bottom: {
      type: AttributeType.boolean,
      required: false,
      default: false,
      componentDefault: false,
      inputOptions: {
        hint: 'Toggle bottom scrolling listening',
      },
    },
    scrollable: {
      type: AttributeType.boolean,
      required: false,
      default: true,
      componentDefault: false,
      inputOptions: {
        disabled: true,
        hint: 'Defines whether or not the component handles the scroll. For a page scroll example, check example below',
      },
    },
    distance: {
      type: AttributeType.number,
      required: false,
      default: 0,
      componentDefault: 0,
      inputOptions: {
        hint: 'The @infinite event will be fired if the scroll < distance',
      },
    },
    mainAutoloadDirection: {
      type: AttributeType.select,
      required: false,
      default: VerticalDirection.bottom,
      componentDefault: VerticalDirection.bottom,
      inputOptions: {
        hint: `In case both top and bottom triggers are visible after first render
    , mainAutoloadDirection will help the component to infer which direction to trigger by default`,
        options: [
          { value: null },
          { value: VerticalDirection.bottom },
          { value: VerticalDirection.top },
        ],
      },
      renderOptions: {
        enumKey: (v) => `VerticalDirection.${VerticalDirection[v]}`,
      },
    },
  },
  emits: {
    infinite: 'handleInfinite',
  },
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

const distance = computed(() => `${attributes.value.props.distance ?? 0}px`);
const debugMode = ref(false);

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
  playgroundReady.value = true;
}

const {
  list, loading, preprend, append, reset,
} = useMockList({
  step: 8,
  pageMin: -1000,
  pageMax: 1000,
});

function handleInfinite(direction: VerticalDirection) {
  if (direction === VerticalDirection.top) {
    preprend();
  } else {
    append();
  }
}

</script>

<style lang="scss">
.pux-InfiniteScrollView {
    --pux-infinite-loading-debug-distance: v-bind(distance);

    &-preview {
        position: relative;
        display: flex;
        flex: 0 1 100%;
        align-items: center;
        justify-content: space-between;

        &-cta {
            display: flex;
            align-items: center;
        }

        .pux-AppSpinner {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
        }
    }

    [data-debug="true"] {
        .mk-AppInfiniteScroll {
            > div {
                &:empty {
                    &:first-child,
                    &:last-child {
                        position: relative;

                        &::before {
                            position: absolute;
                            left: 0;
                            width: 100%;
                            content: "";
                        }
                    }

                    &:first-child {
                        &::before {
                            top: var(--pux-infinite-loading-debug-distance);
                            border-top: 1px solid blue;
                        }
                    }

                    &:last-child {
                        &::before {
                            bottom: var(--pux-infinite-loading-debug-distance);
                            border-top: 1px solid red;
                        }
                    }
                }
            }
        }
    }
}
</style>

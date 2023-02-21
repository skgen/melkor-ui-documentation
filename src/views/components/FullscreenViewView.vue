<template>
  <div class="pux-FullscreenViewView">
    <AppPageTitle>
      {{ $t('component.fullscreenView.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/fullscreen-view/template.hbs"
            :manually-injected-props="{
              class: 'pux-FullscreenViewView-basicExample'
            }"
            :template-variables="{
              open: $t('view.fullscreenView.cta.basicExample.open'),
              close: $t('view.fullscreenView.cta.basicExample.close'),
              source: $t('view.fullscreenView.cta.basicExample.source'),
              t1: $t('view.fullscreenView.title.basicExample.1'),
              t2: $t('view.fullscreenView.title.basicExample.2'),
              t3: $t('view.fullscreenView.title.basicExample.3'),
            }"
            script="/code/view/components/fullscreen-view/script.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-button @click="() => open = !open">
                {{ $t('view.fullscreenView.cta.basicExample.open') }}
              </mk-button>
              <mk-fullscreen-view
                v-model="open"
                v-bind="attributes.props"
                :style="style"
                class="pux-FullscreenViewView-basicExample"
              >
                <div
                  v-if="!attributes.slots.transition"
                  class="pux-FullscreenViewView-basicExample-content"
                >
                  <mk-wysiwyg-preview>
                    <h2>
                      <div>
                        <span>
                          {{ $t('view.fullscreenView.title.basicExample.1') }}
                          <sup>
                            <a
                              href="https://lotr.fandom.com/wiki/Glorfindel"
                              target="_blank"
                            >
                              {{ $t('view.fullscreenView.cta.basicExample.source') }}
                            </a>
                          </sup>
                        </span>
                        <mk-tooltip>
                          <mk-link
                            as-button
                            @click="() => open = !open"
                          >
                            {{ $t('view.fullscreenView.cta.basicExample.close') }}
                          </mk-link>
                          <template #tooltip>
                            {{ $t('view.tooltip.paragraph.basic') }}
                          </template>
                        </mk-tooltip>
                      </div>
                    </h2>
                    <p>
                      {{ $t('view.fullscreenView.paragraph.basicExample.1') }}
                    </p>
                    <h3>
                      {{ $t('view.fullscreenView.title.basicExample.2') }}
                    </h3>
                    <p>
                      {{ $t('view.fullscreenView.paragraph.basicExample.2') }}
                    </p>
                    <h3>
                      {{ $t('view.fullscreenView.title.basicExample.3') }}
                    </h3>
                    <p>
                      {{ $t('view.fullscreenView.paragraph.basicExample.3') }}
                    </p>
                  </mk-wysiwyg-preview>
                </div>
                <template
                  v-if="attributes.slots.transition"
                  #transition="{ active }"
                >
                  <transition name="view-fade">
                    <div
                      v-if="active"
                      class="pux-FullscreenViewView-basicExample-content"
                    >
                      <mk-wysiwyg-preview>
                        <h2>
                          <div>
                            <span>
                              {{ $t('view.fullscreenView.title.basicExample.1') }}
                              <sup>
                                <a
                                  href="https://lotr.fandom.com/wiki/Glorfindel"
                                  target="_blank"
                                >
                                  {{ $t('view.fullscreenView.cta.basicExample.source') }}
                                </a>
                              </sup>
                            </span>
                            <mk-link
                              as-button
                              @click="() => open = !open"
                            >
                              {{ $t('view.fullscreenView.cta.basicExample.close') }}
                            </mk-link>
                          </div>
                        </h2>
                        <p>
                          {{ $t('view.fullscreenView.paragraph.basicExample.1') }}
                        </p>
                        <h3>
                          {{ $t('view.fullscreenView.title.basicExample.2') }}
                        </h3>
                        <p>
                          {{ $t('view.fullscreenView.paragraph.basicExample.2') }}
                        </p>
                        <h3>
                          {{ $t('view.fullscreenView.title.basicExample.3') }}
                        </h3>
                        <p>
                          {{ $t('view.fullscreenView.paragraph.basicExample.3') }}
                        </p>
                      </mk-wysiwyg-preview>
                    </div>
                  </transition>
                </template>
              </mk-fullscreen-view>
            </template>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>

    <!-- <mk-wysiwyg-preview>
      <h2>{{ $t('component.view.name') }}</h2>
      <h3>Fullscreen view</h3>
    </mk-wysiwyg-preview>
    <div>
      <mk-button @click="() => handleToggleView(false)">
        Open view
      </mk-button>
    </div>

    <mk-wysiwyg-preview>
      <h3>Centered X view</h3>
    </mk-wysiwyg-preview>
    <div>
      <mk-button @click="() => handleToggleViewCenteredX(false)">
        Open view
      </mk-button>
    </div>

    <mk-wysiwyg-preview>
      <h3>Centered Y view</h3>
    </mk-wysiwyg-preview>
    <div>
      <mk-button @click="() => handleToggleViewCenteredY(false)">
        Open view
      </mk-button>
    </div>

    <mk-wysiwyg-preview>
      <h3>Centered view</h3>
    </mk-wysiwyg-preview>
    <div>
      <mk-button @click="() => handleToggleViewCentered(false)">
        Open view
      </mk-button>
    </div>

    <mk-wysiwyg-preview>
      <h3>Multiple views</h3>
    </mk-wysiwyg-preview>
    <div>
      <mk-button @click="() => handleToggleView(true)">
        Open view
      </mk-button>
    </div>

    <mk-wysiwyg-preview>
      <h2>{{ $t('component.modal.name') }}</h2>
      <h3>Fullscreen Modal</h3>
      <p>
        <strong>Modals</strong> are enhanced <strong>views</strong>,
        they have a veil to close the modal if a click is
        detected outside of the content.
      </p>
    </mk-wysiwyg-preview>
    <div>
      <mk-button @click="() => handleToggleModal()">
        Open modal
      </mk-button>
    </div> -->

    <!-- <mk-fullscreen-view v-model="view">
      <template #transition="{ active }">
        <transition name="view-fade">
          <div
            v-if="active"
            class="pux-FullscreenViewView-example"
          >
            <div class="pux-FullscreenViewView-close">
              <mk-button @click="handleToggleView">
                close
              </mk-button>
            </div>

            <template v-if="allControls">
              <div class="pux-FullscreenViewView-controls">
                <mk-button @click="handleToggleView">
                  Toggle view
                </mk-button>
                <mk-button @click="handleToggleViewCenteredX">
                  Toggle view centered X
                </mk-button>
                <mk-button @click="handleToggleViewCenteredY">
                  Toggle view centered Y
                </mk-button>
                <mk-button @click="handleToggleViewCentered">
                  Toggle view centered
                </mk-button>
              </div>
            </template>

            <mk-wysiwyg-preview class="pux-FullscreenViewView-wysiwyg">
              <p>I'm a view</p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </mk-wysiwyg-preview>
          </div>
        </transition>
      </template>
    </mk-fullscreen-view>
    <mk-fullscreen-view
      v-model="viewCenteredX"
      center-x
    >
      <template #transition="{ active }">
        <transition name="view-fade">
          <div
            v-if="active"
            class="pux-FullscreenViewView-example"
          >
            <div class="pux-FullscreenViewView-close">
              <mk-button @click="handleToggleViewCenteredX">
                close
              </mk-button>
            </div>

            <template v-if="allControls">
              <div class="pux-FullscreenViewView-controls">
                <mk-button @click="handleToggleView">
                  Toggle view
                </mk-button>
                <mk-button @click="handleToggleViewCenteredX">
                  Toggle view centered X
                </mk-button>
                <mk-button @click="handleToggleViewCenteredY">
                  Toggle view centered Y
                </mk-button>
                <mk-button @click="handleToggleViewCentered">
                  Toggle view centered
                </mk-button>
              </div>
            </template>

            <mk-wysiwyg-preview class="pux-FullscreenViewView-wysiwyg">
              <p>I'm the centered X view</p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </mk-wysiwyg-preview>
          </div>
        </transition>
      </template>
    </mk-fullscreen-view>
    <mk-fullscreen-view
      v-model="viewCenteredY"
      center-y
    >
      <template #transition="{ active }">
        <transition name="view-fade">
          <div
            v-if="active"
            class="pux-FullscreenViewView-example"
          >
            <div class="pux-FullscreenViewView-close">
              <mk-button @click="handleToggleViewCenteredY">
                close
              </mk-button>
            </div>

            <template v-if="allControls">
              <div class="pux-FullscreenViewView-controls">
                <mk-button @click="handleToggleView">
                  Toggle view
                </mk-button>
                <mk-button @click="handleToggleViewCenteredX">
                  Toggle view centered X
                </mk-button>
                <mk-button @click="handleToggleViewCenteredY">
                  Toggle view centered Y
                </mk-button>
                <mk-button @click="handleToggleViewCentered">
                  Toggle view centered
                </mk-button>
              </div>
            </template>

            <mk-wysiwyg-preview class="pux-FullscreenViewView-wysiwyg">
              <p>I'm the centered Y view</p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </mk-wysiwyg-preview>
          </div>
        </transition>
      </template>
    </mk-fullscreen-view>
    <mk-fullscreen-view
      v-model="viewCentered"
      center
    >
      <template #transition="{ active }">
        <transition name="view-fade">
          <div
            v-if="active"
            class="pux-FullscreenViewView-example"
          >
            <div class="pux-FullscreenViewView-close">
              <mk-button @click="handleToggleViewCentered">
                close
              </mk-button>
            </div>

            <template v-if="allControls">
              <div class="pux-FullscreenViewView-controls">
                <mk-button @click="handleToggleView">
                  Toggle view
                </mk-button>
                <mk-button @click="handleToggleViewCenteredX">
                  Toggle view centered X
                </mk-button>
                <mk-button @click="handleToggleViewCenteredY">
                  Toggle view centered Y
                </mk-button>
                <mk-button @click="handleToggleViewCentered">
                  Toggle view centered
                </mk-button>
              </div>
            </template>

            <mk-wysiwyg-preview class="pux-FullscreenViewView-wysiwyg">
              <p>I'm the centered view</p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </mk-wysiwyg-preview>
          </div>
        </transition>
      </template>
    </mk-fullscreen-view>
    <mk-fullscreen-modal
      v-model="modal"
      center
    >
      <template #transition="{ active }">
        <transition name="view-fade">
          <div
            v-if="active"
            class="pux-FullscreenViewView-example"
          >
            <mk-wysiwyg-preview class="pux-FullscreenViewView-wysiwyg">
              <p>I'm the modal</p>

              <p>Try clicking outside of the modal</p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </mk-wysiwyg-preview>
          </div>
        </transition>
      </template>
    </mk-fullscreen-modal> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import { isValue } from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppPageTitle from '@/components/AppPageTitle.vue';
import { createSlotsControllersConfig } from '@/lib/utils';

const open = ref(false);

const definition: ComponentDefinition = {
  props: {
    open: {
      type: AttributeType.vModel,
      required: false,
      default: open.value,
    },
    centerX: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    centerY: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    center: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  slots: createSlotsControllersConfig([
    'transition',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  const newProps = newAttributes.props;
  const { open: newOpen, ...otherProps } = newProps;
  attributes.value = {
    ...newAttributes,
    props: otherProps,
  };
}

// const allControls = ref(false);
// const view = ref(false);
// const viewCenteredX = ref(false);
// const viewCenteredY = ref(false);
// const viewCentered = ref(false);
// const modal = ref(false);

// function handleToggleControls(toggleControls?: boolean) {
//   if (isValue(toggleControls)) {
//     allControls.value = toggleControls;
//   }
// }

// function handleToggleView(toggleControls?: boolean) {
//   handleToggleControls(toggleControls);
//   view.value = !view.value;
// }

// function handleToggleViewCenteredX(toggleControls?: boolean) {
//   handleToggleControls(toggleControls);
//   viewCenteredX.value = !viewCenteredX.value;
// }

// function handleToggleViewCenteredY(toggleControls?: boolean) {
//   handleToggleControls(toggleControls);
//   viewCenteredY.value = !viewCenteredY.value;
// }

// function handleToggleViewCentered(toggleControls?: boolean) {
//   handleToggleControls(toggleControls);
//   viewCentered.value = !viewCentered.value;
// }

// function handleToggleModal() {
//   modal.value = !modal.value;
// }

</script>

<style lang="scss">
.pux-FullscreenViewView {
    &-basicExample {
        &-content {
            padding: var(--app-m-5);
            background-color: var(--app-background-color-soft);
            border-radius: 16px;

            .mk-AppWysiwygPreview {
                max-width: 50vw;
            }

            h2 > div {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        [data-fill="true"] {
            .mk-AppWysiwygPreview {
                max-width: none;
            }
        }
    }

    // &-close {
    //     margin: 0 0 16px;
    // }

    // &-controls {
    //     display: inline-grid;
    //     grid-template-rows: auto auto;
    //     grid-template-columns: auto auto;
    //     gap: 8px;
    // }

    // &-wysiwyg {
    //     &:not(:only-child) {
    //         padding: 16px 0 0;
    //         margin: 16px 0 0;
    //         border-top: 1px solid var(--app-border-color);
    //     }
    // }

    // &-example {
    //     max-width: 50vw;
    //     padding: 20px;
    //     background-color: var(--app-background-color);
    //     border: 1px solid var(--app-border-color);
    // }
}
</style>

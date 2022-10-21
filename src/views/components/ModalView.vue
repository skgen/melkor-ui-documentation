<template>
  <div class="pux-ModalView">
    <mk-wysiwyg-preview>
      <h1>{{ $t('app.modals') }}</h1>
    </mk-wysiwyg-preview>
    <mk-wysiwyg-preview>
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
    </div>

    <mk-fullscreen-view v-model="view">
      <template #transition="{ active }">
        <transition name="view-fade">
          <div
            v-if="active"
            class="pux-ModalView-example"
          >
            <div class="pux-ModalView-close">
              <mk-button @click="handleToggleView">
                close
              </mk-button>
            </div>

            <template v-if="allControls">
              <div class="pux-ModalView-controls">
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

            <mk-wysiwyg-preview class="pux-ModalView-wysiwyg">
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
            class="pux-ModalView-example"
          >
            <div class="pux-ModalView-close">
              <mk-button @click="handleToggleViewCenteredX">
                close
              </mk-button>
            </div>

            <template v-if="allControls">
              <div class="pux-ModalView-controls">
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

            <mk-wysiwyg-preview class="pux-ModalView-wysiwyg">
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
            class="pux-ModalView-example"
          >
            <div class="pux-ModalView-close">
              <mk-button @click="handleToggleViewCenteredY">
                close
              </mk-button>
            </div>

            <template v-if="allControls">
              <div class="pux-ModalView-controls">
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

            <mk-wysiwyg-preview class="pux-ModalView-wysiwyg">
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
            class="pux-ModalView-example"
          >
            <div class="pux-ModalView-close">
              <mk-button @click="handleToggleViewCentered">
                close
              </mk-button>
            </div>

            <template v-if="allControls">
              <div class="pux-ModalView-controls">
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

            <mk-wysiwyg-preview class="pux-ModalView-wysiwyg">
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
            class="pux-ModalView-example"
          >
            <mk-wysiwyg-preview class="pux-ModalView-wysiwyg">
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
    </mk-fullscreen-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { isValue } from '@patriarche/melkor';

const allControls = ref(false);
const view = ref(false);
const viewCenteredX = ref(false);
const viewCenteredY = ref(false);
const viewCentered = ref(false);
const modal = ref(false);

function handleToggleControls(toggleControls?: boolean) {
  if (isValue(toggleControls)) {
    allControls.value = toggleControls;
  }
}

function handleToggleView(toggleControls?: boolean) {
  handleToggleControls(toggleControls);
  view.value = !view.value;
}

function handleToggleViewCenteredX(toggleControls?: boolean) {
  handleToggleControls(toggleControls);
  viewCenteredX.value = !viewCenteredX.value;
}

function handleToggleViewCenteredY(toggleControls?: boolean) {
  handleToggleControls(toggleControls);
  viewCenteredY.value = !viewCenteredY.value;
}

function handleToggleViewCentered(toggleControls?: boolean) {
  handleToggleControls(toggleControls);
  viewCentered.value = !viewCentered.value;
}

function handleToggleModal() {
  modal.value = !modal.value;
}

</script>

<style lang="scss">
.pux-ModalView {
    &-close {
        margin: 0 0 16px;
    }

    &-controls {
        display: inline-grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        gap: 8px;
    }

    &-wysiwyg {
        &:not(:only-child) {
            padding: 16px 0 0;
            margin: 16px 0 0;
            border-top: 1px solid var(--app-border-color);
        }
    }

    &-example {
        max-width: 50vw;
        padding: 20px;
        background-color: var(--app-background-color);
        border: 1px solid var(--app-border-color);
    }
}
</style>

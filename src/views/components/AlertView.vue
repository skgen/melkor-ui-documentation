<template>
  <div>
    <AppPageTitle>
      {{ $t('component.alert.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/alert/template.hbs"
            :template-variables="{ title, content }"
            scss="/code/view/components/alert/scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-alert
                v-bind="attributes.props"
                :style="style"
              >
                {{ title }}
                <template #content>
                  {{ content }}
                </template>
                <template
                  v-if="attributes.slots.icon"
                  #icon
                >
                  <mk-icon icon="wifi" />
                </template>
              </mk-alert>
            </template>
          </AppSandboxPreview>
        </div>
      </section>
      <section>
        <h2>{{ $t('app.examples') }}</h2>
        <div>
          <AppDemoBlock>
            <mk-alert basic>
              This is a basic alert — check it out!
              <template #content>
                Curabitur ultrices dui eu nunc auctor pretium
              </template>
            </mk-alert>
          </AppDemoBlock>
        </div>
        <div>
          <AppDemoBlock>
            <mk-alert error>
              This is an error alert — check it out!
              <template #content>
                Curabitur ultrices dui eu nunc auctor pretium
              </template>
            </mk-alert>
          </AppDemoBlock>
        </div>
        <div>
          <AppDemoBlock>
            <mk-alert warning>
              This is a warning alert — check it out!
              <template #content>
                Curabitur ultrices dui eu nunc auctor pretium
              </template>
            </mk-alert>
          </AppDemoBlock>
        </div>
        <div>
          <AppDemoBlock>
            <mk-alert info>
              This is an info alert — check it out!
              <template #content>
                Curabitur ultrices dui eu nunc auctor pretium
              </template>
            </mk-alert>
          </AppDemoBlock>
        </div>
        <div>
          <AppDemoBlock>
            <mk-alert success>
              This is a success alert — check it out!
              <template #content>
                Curabitur ultrices dui eu nunc auctor pretium
              </template>
            </mk-alert>
          </AppDemoBlock>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig } from '@/lib/utils';

const title = 'Lorem ipsum dolor sit amet';
const content = `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const definition: ComponentDefinition = {
  props: {
    success: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    warning: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    error: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    info: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-alert-background-color',
    '--mk-alert-border-radius',
    '--mk-alert-border-width',
    '--mk-alert-color',
    '--mk-alert-content-font-size',
    '--mk-alert-content-letter-spacing',
    '--mk-alert-font-size',
    '--mk-alert-icon-size',
    '--mk-alert-padding-x',
    '--mk-alert-padding-y',
  ]),
  slots: createSlotsControllersConfig([
    'icon',
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

<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.alert.name') }}</h1>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/alert/template.txt"
      scss="/code/view/component/alert/scss.txt"
      script="/code/view/component/alert/script.txt"
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
        </mk-alert>
      </template>
    </AppSandboxPreview>

    <mk-wysiwyg-preview>
      <h2>{{ $t('app.examples') }}</h2>
    </mk-wysiwyg-preview>

    <AppDemoBlock>
      <mk-alert basic>
        This is a basic alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert error>
        This is an error alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert warning>
        This is a warning alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert info>
        This is an info alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert success>
        This is a success alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig } from '@/lib/utils';

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
    icon: {
      type: AttributeType.string,
      required: false,
      default: null,
    },
  },
  scss: createScssControllersConfig([
    '--mk-alert-color',
    '--mk-alert-background-color',
    '--mk-alert-padding-x',
    '--mk-alert-padding-y',
    '--mk-alert-border-radius',
    '--mk-alert-icon-size',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = newAttributes;
}

</script>

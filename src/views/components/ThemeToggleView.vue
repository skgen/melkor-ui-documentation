<template>
  <div>
    <AppPageTitle>
      {{ $t('component.themeToggle.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>
          {{ $t('app.playground') }}
        </h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/theme-toggle/template.hbs"
            scss="/code/view/components/theme-toggle/scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-theme-toggle
                v-bind="attributes.props"
                :style="style"
              />
            </template>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig } from '@/lib/utils';

const definition: ComponentDefinition = {
  props: {
    compact: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-theme-toggle-background-color',
    '--mk-theme-toggle-color-on-background',
    '--mk-theme-toggle-color-on-target',
    '--mk-theme-toggle-spacing',
    '--mk-theme-toggle-size',
    '--mk-theme-toggle-padding',
    '--mk-theme-toggle-target-padding',
    '--mk-theme-toggle-icon-siz',
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

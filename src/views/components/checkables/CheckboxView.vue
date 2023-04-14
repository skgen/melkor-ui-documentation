<template>
  <div class="pux-ButtonView">
    <AppPageTitle>
      {{ $t('component.checkbox.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/checkables/checkbox/playground.vue.hbs"
            scss="/code/view/components/checkables/checkbox/playground.scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-checkbox
                v-bind="attributes.props"
                :style="style"
              >
                <template v-if="attributes.slots['default']">
                  <mk-icon icon="remove" />
                </template>
              </mk-checkbox>
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
import { AttributeType, type ComponentAttributes, type ComponentDefinition } from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig } from '@/lib/utils';

const definition: ComponentDefinition = {
  props: {
    checked: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-checkbox-border-color',
    '--mk-checkbox-border-radius',
    '--mk-checkbox-border-width',
    '--mk-checkbox-color-active',
    '--mk-checkbox-color-on-active',
    '--mk-checkbox-icon-size',
    '--mk-checkbox-size',
  ]),
  slots: createSlotsControllersConfig([
    'default',
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

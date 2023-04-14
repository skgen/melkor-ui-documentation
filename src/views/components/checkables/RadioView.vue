<template>
  <div class="pux-ButtonView">
    <AppPageTitle>
      {{ $t('component.radio.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/checkables/radio/playground.vue.hbs"
            scss="/code/view/components/checkables/radio/playground.scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-radio
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
import { AttributeType, type ComponentAttributes, type ComponentDefinition } from '@/lib/definition';
import { createScssControllersConfig } from '@/lib/utils';

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
    '--mk-radio-border-color',
    '--mk-radio-border-width',
    '--mk-radio-border-width-active',
    '--mk-radio-color-active',
    '--mk-radio-size',
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

<template>
  <div class="pux-ButtonView">
    <AppPageTitle>
      {{ $t('component.toggle.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/checkables/toggle/playground.vue.hbs"
            scss="/code/view/components/checkables/toggle/playground.scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-toggle
                v-bind="attributes.props"
                :style="style"
              >
                <template
                  v-if="attributes.slots['checked-icon']"
                  #checked-icon
                >
                  <mk-icon icon="check" />
                </template>
                <template
                  v-if="attributes.slots['unchecked-icon']"
                  #unchecked-icon
                >
                  <mk-icon icon="close" />
                </template>
              </mk-toggle>
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
    iconInBackground: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-toggle-background-color',
    '--mk-toggle-color-active',
    '--mk-toggle-color-on-active',
    '--mk-toggle-color-on-background',
    '--mk-toggle-icon-size',
    '--mk-toggle-padding',
    '--mk-toggle-size',
    '--mk-toggle-target-padding',
  ]),
  slots: createSlotsControllersConfig([
    'checked-icon',
    'unchecked-icon',
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

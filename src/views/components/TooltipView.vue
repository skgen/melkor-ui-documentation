<template>
  <div class="mk-TooltipView">
    <AppPageTitle>
      {{ $t('component.tooltip.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/tooltip/template.hbs"
            :template-variables="{
              cta: $t('view.tooltip.cta.basic'),
              paragraph: $t('view.tooltip.paragraph.basic')
            }"
            scss="/code/view/components/tooltip/scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-wysiwyg-preview>
                <mk-tooltip
                  v-bind="attributes.props"
                  :style="style"
                >
                  <mk-link as-button>
                    {{ $t('view.tooltip.cta.basic') }}
                  </mk-link>
                  <template #tooltip>
                    {{ $t('view.tooltip.paragraph.basic') }}
                  </template>
                </mk-tooltip>
              </mk-wysiwyg-preview>
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
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppPageTitle from '@/components/AppPageTitle.vue';
import { createScssControllersConfig } from '@/lib/utils';

const definition: ComponentDefinition = {
  props: {
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
      inputOptions: {
        hint: 'Makes the trigger container fill its parent',
      },
    },
  },
  slots: {
    tooltip: {
      type: AttributeType.boolean,
      required: false,
      default: true,
      inputOptions: {
        disabled: true,
        hint: 'A "required" slot, this is holding the content of the tooltip',
      },
    },
  },
  scss: createScssControllersConfig([
    '--mk-tooltip-text-color',
    '--mk-tooltip-background-color',
    '--mk-tooltip-background-opacity',
    '--mk-tooltip-padding-x',
    '--mk-tooltip-padding-y',
    '--mk-tooltip-border-color',
    '--mk-tooltip-border-radius',
    '--mk-tooltip-border-width',
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

<style lang="scss">
.mk-TooltipView {
    &-menu {
        max-width: 200px;
        padding: 20px;

        // background: var(--app-background-color);
        // border: 1px solid var(--app-border-color);
    }
}
</style>

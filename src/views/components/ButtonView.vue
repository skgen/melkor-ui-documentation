<template>
  <div class="pux-ButtonView">
    <AppPageTitle>
      {{ $t('component.button.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/button/template.hbs"
            scss="/code/view/components/button/scss.hbs"
            :primary-mode="attributes.props.onPrimary === true"
            :template-variables="variables"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-button
                v-bind="attributes.props"
                :style="style"
              >
                <mk-icon icon="desktop_windows" />
                {{ variables.label }}
                <mk-icon icon="arrow_forward" />
              </mk-button>
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

const variables = {
  label: 'Button',
};

const definition: ComponentDefinition = {
  props: {
    outlined: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    onPrimary: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    text: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    light: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    wide: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-button-padding-x',
    '--mk-button-padding-y',
    '--mk-button-bordered-padding-x',
    '--mk-button-bordered-padding-y',
    '--mk-button-spacing-content',
    '--mk-button-background-color',
    '--mk-button-text-color',
    '--mk-button-hollowed-text-color',
    '--mk-button-border-color',
    '--mk-button-border-width',
    '--mk-button-border-radius',
    '--mk-button-cursor',
    '--mk-button-font-size',
    '--mk-button-line-height',
    '--mk-button-font-weight',
    '--mk-button-wide-font-size',
    '--mk-button-wide-bordered-padding-x',
    '--mk-button-wide-bordered-padding-y',
    '--mk-button-wide-padding-x',
    '--mk-button-wide-padding-y',
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
.pux-ButtonView {
    &-primary {
        background-color: var(--app-primary-color);
    }
}
</style>

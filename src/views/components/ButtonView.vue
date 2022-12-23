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
            :primary-mode="attributes.props.onPrimary === true"
            :template-variables="variables"
            @change="handlePreviewChange"
          >
            <mk-button v-bind="attributes.props">
              <mk-icon icon="desktop_windows" />
              {{ variables.label }}
              <mk-icon icon="arrow_forward" />
            </mk-button>
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
  },
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

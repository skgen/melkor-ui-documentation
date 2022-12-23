<template>
  <div>
    <AppPageTitle>
      {{ $t('component.link.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/link/template.hbs"
            :template-variables="{
              cta: $t('view.link.cta')
            }"
            @change="handlePreviewChange"
          >
            <mk-link v-bind="attributes.props">
              <span>{{ $t('view.link.cta') }}</span>
              <mk-icon icon="repeat" />
            </mk-link>
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
    to: {
      type: AttributeType.string,
      required: false,
      default: '/',
    },
    asButton: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    asWrapper: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    underline: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
  },
  scss: createScssControllersConfig([
    '--mk-link-text-color',
    '--mk-link-text-color-active',
    '--mk-link-gap',
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

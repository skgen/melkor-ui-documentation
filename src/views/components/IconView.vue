<template>
  <div class="mk-IconView">
    <AppPageTitle>
      {{ $t('component.icon.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <blockquote>
        <i18n-t
          keypath="view.icon.description"
          scope="global"
        >
          <template #sourceName>
            <code><strong>{{ $t('view.icon.sourceName') }}</strong></code>
          </template>
          <template #url>
            <a
              :href="iconPath"
              target="_blank"
            >{{ iconPath }}</a>
          </template>
        </i18n-t>
      </blockquote>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/components/icon/template.hbs"
      scss="/code/view/components/icon/scss.hbs"
      @change="handlePreviewChange"
    >
      <template #default="{ style }">
        <mk-icon
          v-bind="attributes.props"
          :style="style"
        />
      </template>
    </AppSandboxPreview>

    <mk-wysiwyg-preview>
      <h2>{{ $t('app.examples') }}</h2>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <p>{{ $t('view.icon.default') }}</p>
    </mk-wysiwyg-preview>
    <AppAsyncCodeBlock
      file-path="/code/view/components/icon/default.hbs"
      :language="CodeLanguage.vue"
    />
    <AppDemoBlock>
      <mk-icon icon="save" />
    </AppDemoBlock>

    <mk-wysiwyg-preview>
      <p>{{ $t('view.icon.withButton') }}</p>
    </mk-wysiwyg-preview>
    <AppAsyncCodeBlock
      file-path="/code/view/components/icon/button.hbs"
      :language="CodeLanguage.vue"
      :variables="variables"
    />
    <AppDemoBlock>
      <mk-button>
        <mk-icon icon="save" /> {{ variables.label }}
      </mk-button>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import {
  CodeLanguage, AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';

const iconPath = 'https://fonts.google.com/icons';

const variables = {
  label: 'Save to disk',
};

const definition: ComponentDefinition = {
  props: {
    icon: {
      type: AttributeType.string,
      required: true,
      default: 'menu',
    },
  },
  scss: {
    '--mk-icon-size': {
      type: AttributeType.string,
      required: false,
      default: null,
    },
    '--mk-icon-color': {
      type: AttributeType.string,
      required: false,
      default: null,
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
.mk-IconView {
    &-binding {
        display: flex;
        gap: 8px;
        align-items: center;
    }
}
</style>

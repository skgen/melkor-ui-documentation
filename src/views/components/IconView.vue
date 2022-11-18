<template>
  <div class="mk-IconView">
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.icon.name') }}</h1>
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
      template="/code/view/component/icon/template.txt"
      scss="/code/view/component/icon/scss.txt"
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
      file-path="/code/view/component/icon/default.txt"
      :language="CodeLanguage.vue"
      :variables="{ label: 'Save to disk' }"
    />
    <AppDemoBlock>
      <mk-icon icon="save" />
    </AppDemoBlock>

    <mk-wysiwyg-preview>
      <p>{{ $t('view.icon.withButton') }}</p>
    </mk-wysiwyg-preview>
    <AppAsyncCodeBlock
      file-path="/code/view/component/icon/button.txt"
      :language="CodeLanguage.vue"
      :variables="{ label: 'Save to disk' }"
    />
    <AppDemoBlock>
      <mk-button>
        <mk-icon icon="save" /> Save to disk
      </mk-button>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import {
  CodeLanguage, AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';

const iconPath = 'https://fonts.google.com/icons';

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
      default: 'inherit',
    },
    '--mk-icon-color': {
      type: AttributeType.string,
      required: false,
      default: 'currentColor',
    },
  },
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
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

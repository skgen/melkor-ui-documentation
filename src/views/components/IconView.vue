<template>
  <div class="mk-IconView">
    <AppPageTitle>
      {{ $t('component.icon.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
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
        <h2>{{ $t('app.playground') }}</h2>
        <div>
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
        </div>
      </section>
      <section>
        <h2>{{ $t('app.examples') }}</h2>
        <p>{{ $t('view.icon.default') }}</p>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/components/icon/default.hbs"
            :language="CodeLanguage.vue"
          />
        </div>
        <div>
          <AppDemoBlock>
            <mk-icon icon="save" />
          </AppDemoBlock>
        </div>
        <p>{{ $t('view.icon.withButton') }}</p>
        <div>
          <AppAsyncCodeBlock
            file-path="/code/view/components/icon/button.hbs"
            :language="CodeLanguage.vue"
            :variables="variables"
          />
        </div>
        <div>
          <AppDemoBlock>
            <mk-button>
              <mk-icon icon="save" /> {{ variables.label }}
            </mk-button>
          </AppDemoBlock>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import {
  CodeLanguage, AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';

const iconPath = 'https://fonts.google.com/icons';

const { t } = useI18n();

const variables = {
  label: 'Save to disk',
};

const definition: ComponentDefinition = {
  props: {
    icon: {
      type: AttributeType.string,
      required: true,
      default: 'menu',
      inputOptions: {
        hint: `Name of a ${t('view.icon.sourceName')} icon`,
      },
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

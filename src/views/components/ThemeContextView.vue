<template>
  <div class="pux-ThemeContextView">
    <AppPageTitle>
      {{ $t('component.themeContext.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.purpose') }}</h2>
        <p>
          The <code>{{ $t('component.themeContext.name') }}</code> component purpose is to create a new scope of theme.
        </p>
        <p>
          Any child will inherit the theme of the first upper <code>{{ $t('component.themeContext.name') }}</code>
          it finds, with a fallback of the <code>app</code> theme.
        </p>
        <p>
          A <code>{{ $t('component.themeContext.name') }}</code> with no theme specified results in a
          <code>{{ $t('component.themeContext.name') }}</code> bound directly to the <code>app</code> theme.
        </p>
      </section>

      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/theme-context/playground.vue.hbs"
            @change="handlePreviewChange"
          >
            <mk-theme-context v-bind="attributes.props">
              <mk-wysiwyg-preview>
                <h2>
                  I'm a component following
                  <code v-if="isValue(attributes.props.theme)">
                    {{ attributes.props.theme }}
                  </code>
                  <code v-else>app</code>
                  theme
                </h2>
                <p>{{ lorem }}</p>
              </mk-wysiwyg-preview>
            </mk-theme-context>
          </AppSandboxPreview>
        </div>
      </section>

      <section>
        <h2>{{ $t('app.examples') }}</h2>
        <div>
          <AppSandboxPreview
            template="/code/view/components/theme-context/examples.vue.hbs"
            :template-variables="{
              lorem: '...'
            }"
          >
            <mk-wysiwyg-preview>
              <h2>I'm a component in the <code>app</code> theme context</h2>
              <p>{{ lorem }}</p>
            </mk-wysiwyg-preview>
            <mk-theme-context :theme="Theme.light">
              <mk-wysiwyg-preview>
                <h2>I'm a component in a <code>light</code> theme context</h2>
                <p>{{ lorem }}</p>
              </mk-wysiwyg-preview>

              <mk-theme-context :theme="Theme.dark">
                <mk-wysiwyg-preview>
                  <h2>I'm a component in a <code>dark</code> theme context</h2>
                  <p>{{ lorem }}</p>
                  <mk-theme-context :theme="Theme.light">
                    <mk-wysiwyg-preview>
                      <h2>I'm a component in a <code>light</code> theme context inside a <code>dark</code> theme context</h2>
                      <p>{{ lorem }}</p>
                    </mk-wysiwyg-preview>
                  </mk-theme-context>
                  <mk-theme-context>
                    <mk-wysiwyg-preview>
                      <h2>I'm a component in the <code>app</code> theme context inside a <code>dark</code> theme context</h2>
                      <p>{{ lorem }}</p>
                    </mk-wysiwyg-preview>
                  </mk-theme-context>
                </mk-wysiwyg-preview>
              </mk-theme-context>
            </mk-theme-context>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Theme, isValue } from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

const definition: ComponentDefinition = {
  props: {
    withNode: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    theme: {
      type: AttributeType.string,
      required: false,
      default: null,
      inputOptions: {
        placeholder: 'light / dark, or any custom theme name defined in your app',
      },
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
.pux-ThemeContextView {
    .mk-AppSandboxPreview-component,
    .pux-AppDemoBlock {
        .mk-AppWysiwygPreview {
            padding: var(--app-m-3);
            background-color: var(--app-background-color);

            & + .mk-AppWysiwygPreview {
                margin-top: var(--app-m-3);
            }
        }
    }
}
</style>

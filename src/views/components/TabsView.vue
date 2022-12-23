<template>
  <div class="pux-TabsView">
    <AppPageTitle>
      {{ $t('component.tabs.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section id="static">
        <h2>{{ $t('view.tabs.static.title') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/tabs/static/template.hbs"
            :template-variables="{
              vue: {
                title: '{{ tab.title }}',
                content: '{{ tab.content }}'
              }
            }"
            script="/code/view/components/tabs/static/script.hbs"
            :manually-injected-props="{
              vModel: 'index',
            }"
            @change="handlePreviewChange"
          >
            <mk-tabs
              v-model="index"
              v-bind="attributes.props"
            >
              <mk-tab :value="1">
                Tab 1
              </mk-tab>
              <mk-tab :value="2">
                Tab 2
              </mk-tab>
            </mk-tabs>
            <mk-layers v-model="index">
              <mk-layer :value="1">
                Layer 1
              </mk-layer>
              <mk-layer :value="2">
                Layer 2
              </mk-layer>
            </mk-layers>
          </AppSandboxPreview>
        </div>
      </section>
      <section id="dynamic">
        <h2>{{ $t('view.tabs.dynamic.title') }}</h2>
        <div>
          <AppSandboxPreview
            template="/code/view/components/tabs/dynamic/template.hbs"
            :template-variables="{
              vue: {
                title: '{{ tab.title }}',
                content: '{{ tab.content }}'
              }
            }"
            script="/code/view/components/tabs/dynamic/script.hbs"
          >
            <mk-tabs v-model="playgroundIndex">
              <mk-tab
                v-for="tab in tabs"
                :key="tab.value"
                :value="tab.value"
              >
                {{ tab.title }}
              </mk-tab>
            </mk-tabs>
            <mk-layers v-model="playgroundIndex">
              <mk-layer
                v-for="tab in tabs"
                :key="tab.value"
                :value="tab.value"
              >
                <mk-wysiwyg-preview>
                  {{ tab.content }}
                </mk-wysiwyg-preview>
              </mk-layer>
            </mk-layers>
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

const definition: ComponentDefinition = {
  props: {
    collapsible: {
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

type TabsIndex = { name: string } | string | number;

const tabs = [
  {
    value: { name: 'tab1' },
    title: 'Ainur',
    content: `The Ainur were angelic spirits created by Eru Ilúvatar at the Beginning.
    The Ainur who subsequently entered the physical world of Middle-earth were the Valar ("powers"),
    though that term came to refer primarily to the mightiest among them.`,
  },
  {
    value: 'tab2',
    title: 'Balrogs',
    content: `Demonic creatures of fire and shadow, Balrogs were fallen Maiar, loyal to the first Dark Lord, Morgoth.
    They participated in the wars of the First Age of Middle-earth but were mostly destroyed during the War of Wrath which ended the Age.`,
  },
  {
    value: 3,
    title: 'Elves',
    content: `The Elves, or Firstborn, were the first of Eru's Children to awaken.
    Born under the stars before the ascension of the Moon and the Sun, 
    they retain a special love for light and an inner spirit endowed with unique gifts.`,
  },
];

const index = ref(1);
const playgroundIndex = ref<TabsIndex>(tabs[0].value);
</script>

<style lang="scss">
.pux-TabsView {
    .mk-AppLayers {
        margin: var(--app-m-2) 0 0 0;
    }

    .mk-AppLayer {
        padding: var(--app-m-2);
        border: 1px solid var(--app-border-color);
    }
}
</style>

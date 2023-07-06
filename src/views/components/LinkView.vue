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
            scss="/code/view/components/link/scss.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-link
                v-bind="attributes.props"
                :style="style"
              >
                <span>{{ $t('view.link.cta') }}</span>
                <mk-icon icon="repeat" />
              </mk-link>
            </template>
          </AppSandboxPreview>
        </div>
      </section>
      <section>
        <h2>Links examples</h2>
        <div
          v-for="link of examples"
          :key="link"
        >
          <mk-link :to="link">
            {{ link }}
          </mk-link>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { LinkMatchStrategy } from '@patriarche/melkor';
import { useRoute } from 'vue-router';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import { AttributeType, type ComponentAttributes, type ComponentDefinition } from '@/lib/definition';
import { createScssControllersConfig } from '@/lib/utils';
import router from '@/plugins/router';

const definition: ComponentDefinition = {
  props: {
    to: {
      type: AttributeType.string,
      required: false,
      default: '/component',
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
    matchStrategy: {
      type: AttributeType.select,
      required: true,
      default: LinkMatchStrategy.exactPath,
      inputOptions: {
        options: [
          { value: LinkMatchStrategy.shallowPath },
          { value: LinkMatchStrategy.exactPath },
          { value: LinkMatchStrategy.exactPathWithHash },
        ],
      },
      renderOptions: {
        enumKey: (v) => `LinkMatchStrategy.${LinkMatchStrategy[v]}`,
      },
    },
  },
  scss: createScssControllersConfig([
    '--mk-link-text-color',
    '--mk-link-text-color-active',
    '--mk-link-spacing',
    '--mk-link-font-size',
    '--mk-link-line-height',
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

const examples = [
  '/component',
  '/component#anchor',
  '/component?param=1',
  '/component/link',
  '/component/link#anchor',
  '/component/link?param=1',
  '/component/link/deeper',
];

const hash = ref(false);
const route = useRoute();
function toggleHash() {
  if (hash.value) {
    router.replace({
      ...route,
      hash: undefined,
    });
  } else {
    router.replace({
      ...route,
      hash: '#toto',
    });
  }
  hash.value = !hash.value;
}

</script>

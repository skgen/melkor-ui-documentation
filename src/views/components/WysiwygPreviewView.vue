<template>
  <div>
    <AppPageTitle>
      {{ $t('component.wysiwygPreview.name') }}
    </AppPageTitle>
    <template v-if="initialized">
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/wysiwyg-preview/template.hbs"
        :template-variables="{
          html: format(attributes.props.html as string)
        }"
        @change="handlePreviewChange"
      >
        <mk-wysiwyg-preview v-bind="attributes.props" />
      </AppSandboxPreview>
      <mk-wysiwyg-preview>
        <h2>{{ $t('app.examples') }}</h2>
      </mk-wysiwyg-preview>
      <AppDemoBlock>
        <mk-wysiwyg-preview :html="sample" />
      </AppDemoBlock>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createTemplate } from '@/lib/utils';

const initialized = ref(false);
const sample = ref<string | null>(null);

const definition: ComponentDefinition = {
  props: {
    html: {
      type: AttributeType.wysiwyg,
      required: true,
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

function format(html?: string) {
  if (!html) {
    return '';
  }
  const tab = '\t';
  let result = '';
  let indent = '';

  html.split(/>\s*</).forEach((element: string) => {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }

    result += `${indent}<${element}>\r\n`;

    if (element.match(/^<?\w[^>]*[^/]$/) && !element.startsWith('input')) {
      indent += tab;
    }
  });

  return result.substring(1, result.length - 3);
}

onMounted(async () => {
  if (!definition.props) {
    return;
  }
  let render = await createTemplate('/code/view/components/wysiwyg-preview/sample.hbs');
  sample.value = render({
    title: 'The Lord of the Rings',
    paragraph: `Sauron sends a great army against Gondor. Gandalf arrives at Minas Tirith to warn Denethor of the attack, 
    while Théoden musters the Rohirrim to ride to Gondor's aid.`,
  });
  render = await createTemplate('/code/view/components/wysiwyg-preview/sample-interactive.hbs');
  definition.props.html.default = render({
    title: 'The Lord of the Rings',
    paragraph: `Sauron sends a great army against Gondor. Gandalf arrives at Minas Tirith to warn Denethor of the attack, 
    while Théoden musters the Rohirrim to ride to Gondor's aid.`,
  });
  initialized.value = true;
});

</script>

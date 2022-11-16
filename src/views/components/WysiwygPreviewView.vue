<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.wysiwygPreview.name') }}</h1>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/wysiwyg-preview/template.txt"
      :template-variables="{
        html: format(attributes.props.html as string)
      }"
      @change="handlePreviewChange"
    >
      <mk-wysiwyg-preview v-bind="attributes.props" />
    </AppSandboxPreview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
// import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';

// const content = ref('<p>Type in this editor to see changes mirrored in wysiwyg preview.</p>');

// const content = ref<InputState<WysiwygInputValue>>(createInputState({
//   value: '<p>Type in this editor to see changes mirrored in wysiwyg preview.</p>',
// }));

const definition: ComponentDefinition = {
  props: {
    html: {
      type: AttributeType.wysiwyg,
      required: true,
      default: '<p>Type in this editor to see changes mirrored in wysiwyg preview.</p>',
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

</script>

<template>
  <div class="mk-MediaQueryView">
    <AppPageTitle>
      {{ $t('component.mediaQuery.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/media-query/playground.vue.hbs"
            :template-variables="{
              imageSource,
            }"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-wysiwyg-preview>
                <template v-if="isValue(attributes.props.from) && isValue(attributes.props.to)">
                  Content is displayed from <code>{{ attributes.props.from + 1 }}px</code> to <code>{{ attributes.props.to }}px</code>
                </template>
                <template v-else-if="isValue(attributes.props.from)">
                  Content is displayed from <code>{{ attributes.props.from + 1 }}px</code>
                </template>
                <template v-else-if="isValue(attributes.props.to)">
                  Content is displayed to <code>{{ attributes.props.to }}px</code>
                </template>
                <template v-else>
                  Content is always displayed
                </template>
              </mk-wysiwyg-preview>
              <br>
              <mk-media-query
                v-bind="attributes.props"
                :style="style"
              >
                <mk-image src="/images/gandalf-balrog.jpeg" />
              </mk-media-query>
            </template>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { isValue } from '@patriarche/melkor';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentDefinition, type ComponentAttributes,
} from '@/lib/definition';

const imageSource = '/images/gandalf-balrog.jpeg';

const definition: ComponentDefinition = {
  props: {
    from: {
      type: AttributeType.number,
      required: false,
      default: 500,
    },
    to: {
      type: AttributeType.number,
      required: false,
      default: 2000,
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

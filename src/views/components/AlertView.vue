<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ t('component.alert.name') }}</h1>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <h2>{{ t('app.interactiveView') }}</h2>
    </mk-wysiwyg-preview>

    <AppSandboxPreview
      :definition="definition"
      template="/code/view/component/alert/template.txt"
      @props-change="handlePropsChange"
    >
      <mk-alert v-bind="componentProps">
        {{ title }}
        <template #content>
          {{ content }}
        </template>
      </mk-alert>
      <template #code-after>
        <AppAsyncCodeBlock
          file-path="/code/view/component/alert/script.txt"
          :language="CodeLanguage.typescript"
        />
      </template>
    </AppSandboxPreview>

    <mk-wysiwyg-preview>
      <h2>{{ t('app.examples') }}</h2>
    </mk-wysiwyg-preview>

    <AppDemoBlock>
      <mk-alert basic>
        This is a basic — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert error>
        This is an error alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert warning>
        This is a warning alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert info>
        This is an info alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert success>
        This is a success alert — check it out!
        <template #content>
          Curabitur ultrices dui eu nunc auctor pretium
        </template>
      </mk-alert>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { reactive, ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import {
  PropType, type ComponentProps, type PropsDefinition, CodeLanguage,
} from '@/lib/definition';

const { t } = useI18n();

const title = 'Lorem ipsum dolor sit amet';
const content = `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const definition: PropsDefinition = reactive({
  success: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  warning: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  error: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  info: {
    type: PropType.boolean,
    required: false,
    default: false,
  },
  icon: {
    type: PropType.string,
    required: false,
    default: null,
  },
});

const componentProps = ref({});

function handlePropsChange(newProps: ComponentProps) {
  componentProps.value = newProps;
}

</script>

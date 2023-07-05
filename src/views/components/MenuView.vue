<template>
  <div class="mk-TooltipView">
    <AppPageTitle>
      {{ $t('component.menu.name') }}
    </AppPageTitle>

    <mk-wysiwyg-preview>
      <section>
        <h2>{{ $t('app.playground') }}</h2>
        <div>
          <AppSandboxPreview
            :definition="definition"
            template="/code/view/components/menu/playground.vue.hbs"
            :template-variables="{
              label: open ? $t('view.menu.action.close') : $t('view.menu.action.open'),
              title: $t('view.menu.paragraph.popinTitle'),
              paragraph: $t('view.menu.paragraph.popinContent'),
            }"
            scss="/code/view/components/menu/playground.scss.hbs"
            script="/code/view/components/menu/playground.ts.hbs"
            @change="handlePreviewChange"
          >
            <template #default="{ style }">
              <mk-menu
                v-model="open"
                v-bind="attributes.props"
                :style="style"
              >
                <mk-button @click="() => open = !open">
                  {{ open ? $t('view.menu.action.close') : $t('view.menu.action.open') }}
                </mk-button>
                <template #menu>
                  <div :style="{ maxWidth: '300px', padding: 'var(--app-m-3)' }">
                    <mk-wysiwyg-preview>
                      <h3>{{ $t('view.menu.paragraph.popinTitle') }}</h3>
                      <blockquote>{{ $t('view.menu.paragraph.popinContent') }}</blockquote>
                    </mk-wysiwyg-preview>
                  </div>
                </template>
              </mk-menu>
            </template>
          </AppSandboxPreview>
        </div>
      </section>
    </mk-wysiwyg-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FloatingPlacement } from '@patriarche/melkor';
import { camelCase } from 'change-case';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppPageTitle from '@/components/AppPageTitle.vue';
import { createScssControllersConfig } from '@/lib/utils';

const open = ref(false);

const definition: ComponentDefinition = {
  props: {
    open: {
      type: AttributeType.vModel,
      required: true,
      default: open.value,
    },
    autoHide: {
      type: AttributeType.boolean,
      required: false,
      default: false,
      inputOptions: {
        hint: 'Automatically hides when click outside it detected',
      },
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
      inputOptions: {
        hint: 'Makes the trigger container fill its parent',
      },
    },
    placement: {
      type: AttributeType.select,
      required: false,
      default: null,
      inputOptions: {
        options: [
          { value: null },
          { value: FloatingPlacement.auto },
          { value: FloatingPlacement.autoStart },
          { value: FloatingPlacement.autoEnd },
          { value: FloatingPlacement.top },
          { value: FloatingPlacement.topStart },
          { value: FloatingPlacement.topEnd },
          { value: FloatingPlacement.right },
          { value: FloatingPlacement.rightStart },
          { value: FloatingPlacement.rightEnd },
          { value: FloatingPlacement.bottom },
          { value: FloatingPlacement.bottomStart },
          { value: FloatingPlacement.bottomEnd },
          { value: FloatingPlacement.left },
          { value: FloatingPlacement.leftStart },
          { value: FloatingPlacement.leftEnd },
        ],
      },
      renderOptions: {
        enumKey: (v) => `FloatingPlacement.${camelCase(v)}`,
      },
    },
  },
  slots: {
    menu: {
      type: AttributeType.boolean,
      required: false,
      default: true,
      inputOptions: {
        disabled: true,
        hint: 'A "required" slot, this is holding the content of the menu',
      },
    },
  },
  scss: createScssControllersConfig([
    '--mk-menu-text-color',
    '--mk-menu-background-color',
    '--mk-menu-border-width',
    '--mk-menu-border-color',
    '--mk-menu-border-radius',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  const newProps = newAttributes.props;
  const { open: newOpen, ...otherProps } = newProps;
  attributes.value = {
    ...newAttributes,
    props: otherProps,
  };
}

</script>

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
            template="/code/view/components/menu/template.hbs"
            :template-variables="{
              label: open ? $t('view.menu.action.close') : $t('view.menu.action.open'),
              title: $t('view.menu.paragraph.popinTitle'),
              paragraph: $t('view.menu.paragraph.popinContent'),
            }"
            script="/code/view/components/menu/script.hbs"
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
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import AppPageTitle from '@/components/AppPageTitle.vue';

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
          { label: '-----', value: undefined },
          { label: 'FloatingPlacement.auto', value: FloatingPlacement.auto },
          { label: 'FloatingPlacement.autoStart', value: FloatingPlacement.autoStart },
          { label: 'FloatingPlacement.autoEnd', value: FloatingPlacement.autoEnd },
          { label: 'FloatingPlacement.top', value: FloatingPlacement.top },
          { label: 'FloatingPlacement.topStart', value: FloatingPlacement.topStart },
          { label: 'FloatingPlacement.topEnd', value: FloatingPlacement.topEnd },
          { label: 'FloatingPlacement.right', value: FloatingPlacement.right },
          { label: 'FloatingPlacement.rightStart', value: FloatingPlacement.rightStart },
          { label: 'FloatingPlacement.rightEnd', value: FloatingPlacement.rightEnd },
          { label: 'FloatingPlacement.bottom', value: FloatingPlacement.bottom },
          { label: 'FloatingPlacement.bottomStart', value: FloatingPlacement.bottomStart },
          { label: 'FloatingPlacement.bottomEnd', value: FloatingPlacement.bottomEnd },
          { label: 'FloatingPlacement.left', value: FloatingPlacement.left },
          { label: 'FloatingPlacement.leftStart', value: FloatingPlacement.leftStart },
          { label: 'FloatingPlacement.leftEnd', value: FloatingPlacement.leftEnd },
        ],
      },
      renderOptions: {
        valueAsSelectLabel: true,
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

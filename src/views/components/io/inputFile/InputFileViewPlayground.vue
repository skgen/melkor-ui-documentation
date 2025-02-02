<template>
  <section>
    <h2>{{ $t('app.playground') }}</h2>
    <div>
      <AppInputStatePreview :state="state" />
    </div>
    <div>
      <AppSandboxPreview
        :definition="definition"
        template="/code/view/components/io/input-file/template.hbs"
        scss="/code/view/components/io/input-file/scss.hbs"
        script="/code/view/components/io/input-file/script.hbs"
        @change="handlePreviewChange"
      >
        <template #default="{ style }">
          <mk-input-file
            v-model="state"
            v-bind="attributes.props"
            :style="style"
          >
            <template
              v-if="attributes.slots['file']"
              #file="{ file, index, onDelete }"
            >
              <mk-button
                outlined
                @click="onDelete"
              >
                {{ index }} - {{ file.name }} <mk-icon icon="delete" />
              </mk-button>
            </template>
          </mk-input-file>
        </template>
      </AppSandboxPreview>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  createInputState,
  type InputState,
  type FileInputValue,
  FileType,
} from '@patriarche/melkor';
import AppSandboxPreview from '@/components/AppSandboxPreview.vue';
import AppInputStatePreview from '@/components/AppInputStatePreview.vue';
import {
  AttributeType, type ComponentAttributes, type ComponentDefinition,
} from '@/lib/definition';
import { createScssControllersConfig, createSlotsControllersConfig, mapSandboxAttributesWithoutInputState } from '@/lib/utils';

function validate(value: FileInputValue) {
  return value.length <= 0 ? 'Required' : null;
}

const state = ref<InputState<FileInputValue>>(createInputState({
  value: [
    {
      name: 'Yuri',
      url: 'https://patriarche-ux.fr/wp-content/uploads/2022/01/yuri-patriarche-ux-official.jpg',
      size: null,
      type: FileType.image,
      rawFile: null,
    },
  ],
}));

const accept = ['image/jpg', '.gif'];

const definition: ComponentDefinition = {
  props: {
    state: {
      type: AttributeType.vModel,
      required: true,
      default: state.value,
    },
    validate: {
      type: AttributeType.reference,
      required: false,
      default: validate,
    },
    name: {
      type: AttributeType.string,
      required: false,
      default: 'file',
    },
    label: {
      type: AttributeType.string,
      required: false,
      default: 'Input file',
    },
    hint: {
      type: AttributeType.string,
      required: false,
      default: 'JPG, GIF - 3 Mo max.',
    },
    disabled: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    fill: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    multiple: {
      type: AttributeType.boolean,
      required: false,
      default: false,
    },
    max: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
    accept: {
      type: AttributeType.reference,
      required: false,
      default: accept,
    },
    maxSize: {
      type: AttributeType.number,
      required: false,
      default: null,
    },
  },
  scss: createScssControllersConfig([
    '--mk-input-file-border-color',
    '--mk-input-file-dropzone-background-color',
    '--mk-input-file-dropzone-border-radius',
    '--mk-input-file-dropzone-border-width',
  ]),
  slots: createSlotsControllersConfig([
    'file',
  ]),
};

const attributes = ref<ComponentAttributes>({
  props: {},
  scss: {},
  slots: {},
});

function handlePreviewChange(newAttributes: ComponentAttributes) {
  attributes.value = mapSandboxAttributesWithoutInputState(newAttributes);
}

</script>

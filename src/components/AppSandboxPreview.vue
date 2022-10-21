<template>
  <mk-wysiwyg-preview>
    <h2>{{ $t('app.playground') }}</h2>
  </mk-wysiwyg-preview>
  <div class="mk-AppSandboxPreview">
    <div class="mk-AppSandboxPreview-content">
      <div class="mk-AppSandboxPreview-controllers">
        <template v-if="isValue(propsControllers)">
          <mk-wysiwyg-preview>
            <h3>Props</h3>
          </mk-wysiwyg-preview>
          <ul>
            <template
              v-for="(controller, index) in propsControllers"
              :key="index"
            >
              <li v-if="!!resolveInputName(controller.type)">
                <component
                  :is="resolveInputName(controller.type)"
                  :label="controller.key"
                  :model-value="controller.input"
                  fill
                  @update:model-value="(state: any) => handlePropValueChange(controller.key, state)"
                />
              </li>
            </template>
          </ul>
        </template>
        <template v-if="isValue(scssControllers)">
          <mk-wysiwyg-preview>
            <h3>SCSS</h3>
          </mk-wysiwyg-preview>
          <ul>
            <template
              v-for="(controller, index) in scssControllers"
              :key="index"
            >
              <li v-if="!!resolveInputName(controller.type)">
                <component
                  :is="resolveInputName(controller.type)"
                  :label="controller.key"
                  :model-value="controller.input"
                  fill
                  @update:model-value="(state: any) => handleScssValueChange(controller.key, state)"
                />
              </li>
            </template>
          </ul>
        </template>
      </div>
      <div class="mk-AppSandboxPreview-preview">
        <mk-wysiwyg-preview>
          <h3>Render</h3>
        </mk-wysiwyg-preview>
        <div
          class="mk-AppSandboxPreview-component"
          :data-primary="props.primaryMode || undefined"
        >
          <slot :style="scssStyle" />
        </div>
      </div>
    </div>
    <div class="mk-AppSandboxPreview-code">
      <mk-wysiwyg-preview>
        <h3>Code</h3>
      </mk-wysiwyg-preview>
      <slot name="code-before" />
      <AppAsyncCodeBlock
        :file-path="props.template"
        :language="CodeLanguage.template"
        :variables="templateVars"
      />
      <AppAsyncCodeBlock
        v-if="props.scss"
        :file-path="props.scss"
        :language="CodeLanguage.scss"
        :variables="scssVars"
      />
      <slot name="code-after" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed, onMounted, reactive, watch,
} from 'vue';
import {
  createInputState, isString, isValue, type InputState,
} from '@patriarche/melkor';
import isBoolean from 'lodash/isBoolean';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import {
  type Attributes, type ComponentDefinition, AttributeType, type AttributesDefinition, type AttributesControllers,
  CodeLanguage,
  type ComponentAttributes,
} from '@/lib/definition';

type Props = {
  definition: ComponentDefinition;
  template: string;
  scss?: string;
  templateVariables?: Record<string, any>;
  scssVariables?: Record<string, any>;
  primaryMode?: boolean;
};

type Emits = {
  (event: 'change', value: ComponentAttributes): void;
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

function resolveInputName(type: AttributeType) {
  if (type === AttributeType.string) {
    return 'mk-input-text';
  }
  if (type === AttributeType.number) {
    return 'mk-input-number';
  }
  if (type === AttributeType.boolean) {
    return 'mk-input-toggle';
  }
  return false;
}

function createControllers(def: AttributesDefinition) {
  const o: AttributesControllers = {};
  const keys = Object.keys(def);
  for (const key of keys) {
    o[key] = {
      ...def[key],
      key,
      input: createInputState({ value: def[key].default }),
    };
  }
  return o;
}

const propsControllers = props.definition.props ? reactive(createControllers(props.definition.props)) : null;
const scssControllers = props.definition.scss ? reactive(createControllers(props.definition.scss)) : null;

function handlePropValueChange(key: string, newState: InputState<any>) {
  if (isValue(propsControllers)) {
    propsControllers[key].input = newState;
  }
}

function handleScssValueChange(key: string, newState: InputState<any>) {
  if (isValue(scssControllers)) {
    scssControllers[key].input = newState;
  }
}

function isRealValue<T>(value: T) {
  return isValue(value)
  && (isString(value) ? value !== '' : true)
  && (isBoolean(value) ? value : true);
}

const templateVars = computed(() => {
  const variables = { ...props.templateVariables };
  if (isValue(propsControllers)) {
    const tProps = [];
    const keys = Object.keys(propsControllers);
    for (const key of keys) {
      const controller = propsControllers[key];
      const { value } = controller.input;
      if (!(!isRealValue(value) && !controller.required)) {
        if (controller.type === AttributeType.vModel) {
          tProps.push(`v-model="${key}"`);
        } else if (controller.type === AttributeType.reference) {
          tProps.push(`:${key}="${key}"`);
        } else if (controller.type === AttributeType.boolean) {
          tProps.push(key);
        } else if (controller.type === AttributeType.number) {
          tProps.push(`:${key}="${value}"`);
        } else {
          tProps.push(`${key}="${value}"`);
        }
      }
    }
    if (tProps.length === 0) {
      variables.props = '';
    } else if (tProps.length === 1) {
      variables.props = ` ${tProps[0]}`;
    } else {
      variables.props = `\n\t${tProps.join('\n\t')}\n`;
    }
  }

  return variables;
});

const scssVars = computed(() => {
  const variables = { ...props.scssVariables };
  if (isValue(scssControllers)) {
    const tProps = [];
    const keys = Object.keys(scssControllers);
    for (const key of keys) {
      const controller = scssControllers[key];
      const { value } = controller.input;
      if (!(!isRealValue(value) && !controller.required)) {
        tProps.push(`${key}: ${value};`);
      }
    }
    if (tProps.length === 0) {
      variables.scss = '';
    } else {
      variables.scss = `\n\t${tProps.join('\n\t')}\n`;
    }
  }
  return variables;
});

const scssStyle = computed(() => {
  let style = '';
  if (isValue(scssControllers)) {
    const tProps = [];
    const keys = Object.keys(scssControllers);
    for (const key of keys) {
      const controller = scssControllers[key];
      const { value } = controller.input;
      if (!(!isRealValue(value) && !controller.required)) {
        tProps.push(`${key}: ${value};`);
      }
    }
    if (tProps.length) {
      style = `${tProps.join(' ')}`;
    }
  }
  return style;
});

function mapControllersValues(controllers: AttributesControllers | null) {
  if (!isValue(controllers)) {
    return {};
  }
  const o: Attributes = {};
  const keys = Object.keys(controllers);
  for (const key of keys) {
    o[key] = controllers[key].input.value;
  }
  return o;
}

const propsAttributes = computed(() => mapControllersValues(propsControllers));

const scssAttributes = computed(() => mapControllersValues(scssControllers));

watch([propsAttributes, scssAttributes], ([newPropsAttributes, newScssAttributes]) => {
  emit('change', {
    props: newPropsAttributes,
    scss: newScssAttributes,
  });
});

onMounted(() => {
  emit('change', {
    props: propsAttributes.value,
    scss: scssAttributes.value,
  });
});

</script>

<style lang="scss">
.mk-AppSandboxPreview {
    display: flex;
    flex-direction: column;
    gap: var(--app-m-4);
    padding: var(--app-m-2);
    background-color: var(--app-background-color-soft);
    border-radius: var(--app-border-radius);

    &-content {
        display: flex;
        gap: var(--app-m-4);
    }

    &-controllers {
        display: flex;
        flex: 2;
        flex-direction: column;
        gap: var(--app-m-2);

        ul {
            display: flex;
            flex: 1;
            flex-direction: column;
            gap: var(--app-m-2);
            padding: var(--app-m-3) var(--app-m-4);
            background-color: var(--app-background-color);
            border: 3px dashed var(--app-border-color);
            border-radius: 8px;
            transition: border-color var(--app-transition-duration-border);

            &:hover {
                border-color: var(--app-primary-color);
            }
        }
    }

    &-preview {
        display: flex;
        flex: 1 1 300px;
        flex-direction: column;
        gap: var(--app-m-2);
    }

    &-component {
        flex: 1;
        padding: var(--app-m-3) var(--app-m-4);
        background-color: var(--app-background-color);
        border: 3px dashed var(--app-border-color);
        border-radius: 8px;
        transition: border-color var(--app-transition-duration-border);

        &:hover {
            border-color: var(--app-primary-color);
        }

        &[data-primary="true"] {
            background-color: var(--app-primary-color);
            border-color: var(--app-primary-color-60);

            &:hover {
                border-color: var(--app-border-color);
            }
        }
    }

    &-code {
        display: flex;
        flex-direction: column;
        gap: var(--app-m-1);
    }
}
</style>

<template>
  <div class="mk-AppSandboxPreview">
    <div class="mk-AppSandboxPreview-content">
      <div class="mk-AppSandboxPreview-controllers">
        <mk-wysiwyg-preview>
          <h3>Props</h3>
        </mk-wysiwyg-preview>
        <ul>
          <template
            v-for="(controller, index) in controllers"
            :key="index"
          >
            <li v-if="!!resolveInputName(controller.type)">
              <component
                :is="resolveInputName(controller.type)"
                :label="controller.key"
                :model-value="controller.input"
                fill
                @update:model-value="(state: any) => handleValueChange(controller.key, state)"
              />
            </li>
          </template>
        </ul>
      </div>
      <div class="mk-AppSandboxPreview-preview">
        <mk-wysiwyg-preview>
          <h3>Render</h3>
        </mk-wysiwyg-preview>
        <div
          class="mk-AppSandboxPreview-component"
          :data-primary="props.primaryMode || undefined"
        >
          <slot />
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
  PropType, type ComponentProps, type PropsDefinition, CodeLanguage, type PropDefinition,
} from '@/lib/definition';

type Props = {
  definition: PropsDefinition;
  template: string;
  templateVariables?: Record<string, any>;
  primaryMode?: boolean;
};

type Emits = {
  (event: 'propsChange', value: ComponentProps): void;
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

function resolveInputName(type: PropType) {
  if (type === PropType.string) {
    return 'mk-input-text';
  }
  if (type === PropType.number) {
    return 'mk-input-number';
  }
  if (type === PropType.boolean) {
    return 'mk-input-toggle';
  }
  return false;
}

function createControllers(def: PropsDefinition) {
  const o: { [key:string]: PropDefinition & { key: string; input: InputState<any> } } = {};
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

const controllers = reactive(createControllers(props.definition));

function handleValueChange(key: string, newState: InputState<any>) {
  controllers[key].input = newState;
}

function isRealValue<T>(value: T) {
  return isValue(value)
  && (isString(value) ? value !== '' : true)
  && (isBoolean(value) ? value : true);
}

const templateVars = computed(() => {
  const variables = { ...props.templateVariables };
  const tProps = [];
  const keys = Object.keys(controllers);
  for (const key of keys) {
    const controller = controllers[key];
    const { value } = controller.input;
    if (!(!isRealValue(value) && !controller.required)) {
      if (controller.type === PropType.vModel) {
        tProps.push(`v-model="${key}"`);
      } else if (controller.type === PropType.reference) {
        tProps.push(`:${key}="${key}"`);
      } else if (controller.type === PropType.boolean) {
        tProps.push(key);
      } else if (controller.type === PropType.number) {
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

  return variables;
});

const componentProps = computed(() => {
  const o: ComponentProps = {};
  const keys = Object.keys(controllers);
  for (const key of keys) {
    o[key] = controllers[key].input.value;
  }
  return o;
});

watch(componentProps, (newComponentProps) => {
  emit('propsChange', newComponentProps);
});

onMounted(() => {
  emit('propsChange', componentProps.value);
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
        }

        &:hover {
            ul {
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

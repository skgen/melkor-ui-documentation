<template>
  <div class="mk-AppSandboxPreview">
    <div class="mk-AppSandboxPreview-content">
      <div class="mk-AppSandboxPreview-controllers">
        <mk-wysiwyg-preview>
          <h3>Props</h3>
        </mk-wysiwyg-preview>
        <ul>
          <li
            v-for="(controller, index) in controllers"
            :key="index"
          >
            <component
              :is="resolveInputName(controller.type)"
              :label="controller.key"
              :model-value="controller.input"
              fill
              @update:model-value="(state: any) => handleValueChange(controller.key, state)"
            />
          </li>
        </ul>
      </div>
      <div class="mk-AppSandboxPreview-preview">
        <mk-wysiwyg-preview>
          <h3>Render</h3>
        </mk-wysiwyg-preview>
        <div class="mk-AppSandboxPreview-component">
          <slot
            name="component"
            v-bind="cProps"
          />
        </div>
        <mk-wysiwyg-preview>
          <h3>Code</h3>
        </mk-wysiwyg-preview>
        <div class="mk-AppSandboxPreview-code">
          <AppAsyncCodeBlock
            :file-path="props.template"
            :language="CodeLanguage.template"
            :variables="getTemplateProps()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import {
  createInputState, isString, isValue, type InputState,
} from '@patriarche/melkor';
import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber';
import { type PropsDefinition, PropType, type PropDefinition } from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/components/AppCodeBlock.vue';

type Props = {
  propsDefinition: PropsDefinition;
  template: string;
  templateVariables?: Record<string, any>;
};

const props = defineProps<Props>();

function createProps() {
  const o: Record<string, unknown> = {};
  const keys = Object.keys(props.propsDefinition);
  for (const key of keys) {
    o[key] = props.propsDefinition[key].default;
  }
  return o;
}

function createControllers() {
  const o: Record<string, PropDefinition & { key: string; input: InputState<any> }> = {};
  const keys = Object.keys(props.propsDefinition);
  for (const key of keys) {
    o[key] = {
      ...props.propsDefinition[key],
      key,
      input: createInputState({ value: props.propsDefinition[key].default }),
    };
  }
  return o;
}

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
  throw new Error('No input match');
}

const cProps = reactive(createProps());
const controllers = reactive(createControllers());

function handleValueChange(key: string, newState: InputState<any>) {
  controllers[key].input = newState;
}

function isRealValue<T>(value: T) {
  return isValue(value)
  && (isString(value) ? value !== '' : true)
  && (isBoolean(value) ? value : true);
}

function getTemplateProps() {
  const variables = { ...props.templateVariables };
  const tProps = [];
  const keys = Object.keys(props.propsDefinition);
  for (const key of keys) {
    const controller = controllers[key];
    const value = cProps[key];
    if (!(!isRealValue(value) && !controller.required)) {
      if (isBoolean(value)) {
        tProps.push(key);
      } else if (isNumber(value)) {
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
}

watch(controllers, (newControllers) => {
  const keys = Object.keys(props.propsDefinition);
  for (const key of keys) {
    cProps[key] = newControllers[key].input.value;
  }
});

</script>

<style lang="scss">
.mk-AppSandboxPreview {
    padding: var(--app-m-2);
    background-color: var(--app-background-color-soft);
    border-radius: var(--app-border-radius);

    &-content {
        display: flex;
        gap: var(--app-m-6);
    }

    &-controllers {
        display: flex;
        flex: 2;
        flex-direction: column;
        gap: var(--app-m-2);

        ul {
            display: flex;
            flex-direction: column;
            gap: var(--app-m-2);
            padding: var(--app-m-3) var(--app-m-4);
            background-color: var(--app-background-color);
            border: 3px dashed var(--app-border-color);
            border-radius: 8px;
        }
    }

    &-preview {
        display: flex;
        flex: 1 1 300px;
        flex-direction: column;
        gap: var(--app-m-2);
    }

    &-component {
        padding: var(--app-m-3) var(--app-m-4);
        background-color: var(--app-background-color);
        border: 3px dashed var(--app-border-color);
        border-radius: 8px;
    }
}
</style>

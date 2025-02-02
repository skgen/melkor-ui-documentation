<template>
  <div class="mk-AppSandboxPreview">
    <div
      class="mk-AppSandboxPreview-content"
      :data-is-viewport-active="!!viewportState.value ?? undefined"
    >
      <div
        v-if="isValue(propsControllers) || isValue(slotsControllers) || isValue(scssControllers)"
        class="mk-AppSandboxPreview-controllers"
      >
        <template v-if="isValue(propsControllers)">
          <mk-wysiwyg-preview>
            <h3>Props</h3>
          </mk-wysiwyg-preview>
          <ul
            v-if="anyInteractablePropsController"
            class="mk-AppSandboxPreview-controllers-list"
          >
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
                  v-bind="controller.inputOptions"
                  @update:model-value="(state: any) => handlePropValueChange(controller.key, state)"
                >
                  <template
                    v-if="resolveInputName(controller.type) === 'mk-input-select' && controller.renderOptions?.enumKey"
                    #option="{ option }"
                  >
                    <template v-if="!isNil(option.value)">
                      {{ controller.renderOptions?.enumKey(option.value) }}
                    </template>
                  </template>
                </component>
              </li>
            </template>
          </ul>
          <div
            v-else
            class="mk-AppSandboxPreview-controllers-list"
          >
            No interactable prop !
          </div>
        </template>
        <template v-if="isValue(slotsControllers)">
          <mk-wysiwyg-preview>
            <h3>Slots</h3>
          </mk-wysiwyg-preview>
          <ul
            v-if="anyInteractablePropsController"
            class="mk-AppSandboxPreview-controllers-list"
          >
            <template
              v-for="(controller, index) in slotsControllers"
              :key="index"
            >
              <li v-if="!!resolveInputName(controller.type)">
                <component
                  :is="resolveInputName(controller.type)"
                  :label="controller.key"
                  :model-value="controller.input"
                  fill
                  v-bind="controller.inputOptions"
                  @update:model-value="(state: any) => handleSlotsValueChange(controller.key, state)"
                />
              </li>
            </template>
          </ul>
        </template>
        <template v-if="isValue(scssControllers)">
          <mk-wysiwyg-preview>
            <h3>SCSS</h3>
          </mk-wysiwyg-preview>
          <ul
            v-if="anyInteractableScssController"
            class="mk-AppSandboxPreview-controllers-list"
          >
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
                  v-bind="controller.inputOptions"
                  @update:model-value="(state: any) => handleScssValueChange(controller.key, state)"
                />
              </li>
            </template>
          </ul>
          <div
            v-else
            class="mk-AppSandboxPreview-controllers-list"
          >
            No interactable scss variable !
          </div>
        </template>
      </div>
      <div class="mk-AppSandboxPreview-preview">
        <div class="mk-AppSandboxPreview-preview-title">
          <mk-wysiwyg-preview>
            <h3>
              Render
            </h3>
          </mk-wysiwyg-preview>
          <div class="mk-AppSandboxPreview-preview-viewport">
            <mk-input-radio
              v-model="viewportState"
              :options="viewportOptions"
              nullable
            />
          </div>
        </div>
        <div
          v-if="$slots['preview-toolbar']"
          class="mk-AppSandboxPreview-preview-toolbar"
        >
          <slot name="preview-toolbar" />
        </div>
        <div
          class="mk-AppSandboxPreview-component"
          :data-primary="props.primaryMode || undefined"
        >
          <div class="mk-AppSandboxPreview-viewport">
            <span
              v-if="viewportState.value"
              :style="{ maxWidth: viewportState.value ? `${viewportState.value}px` : undefined }"
              class="mk-AppSandboxPreview-viewport-scale"
            > {{ '<=' }} {{ viewportState.value }}px</span>
            <div :style="{ maxWidth: viewportState.value ? `${viewportState.value}px` : undefined }">
              <slot :style="scssStyle" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mk-AppSandboxPreview-code">
      <slot name="code-before" />

      <mk-wysiwyg-preview v-if="props.template || props.script || (props.scss && scssVars.scss) || $slots['code-after']">
        <h3>Code</h3>
        <blockquote>
          If a prop doesnt show up, it's either a:
          <code>false</code> / <code>null</code> / <code>undefined</code> / <strong>component default</strong> value.
        </blockquote>

        <div v-if="props.template">
          <AppAsyncCodeBlock
            :file-path="props.template"
            :language="CodeLanguage.template"
            :variables="templateVars"
          />
        </div>
        <div v-if="props.script">
          <AppAsyncCodeBlock

            :file-path="props.script"
            :language="CodeLanguage.typescript"
            :variables="scriptVars"
          />
        </div>
        <div v-if="props.scss && scssVars.scss">
          <AppAsyncCodeBlock
            :file-path="props.scss"
            :language="CodeLanguage.scss"
            :variables="scssVars"
          />
        </div>
        <div v-if="$slots['code-after']">
          <slot name="code-after" />
        </div>
      </mk-wysiwyg-preview>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed, onMounted, reactive, ref, watch,
} from 'vue';
import isNil from 'lodash/isNil';
import {
  createInputState, isDef, isString, isValue, type InputState, type SelectInputOptions, type RadioInputOption,
} from '@patriarche/melkor';
import isBoolean from 'lodash/isBoolean';
import { camelCase, paramCase } from 'change-case';
import { isEqual, isNumber } from 'lodash';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import {
  type Attributes, type ComponentDefinition, AttributeType, type AttributesDefinition, type AttributesControllers,
  CodeLanguage,
  type ComponentAttributes,
  type AttributeValueType,
  type AttributeController,
} from '@/lib/definition';

type Props = {
  definition?: ComponentDefinition;
  template?: string;
  script?: string;
  scss?: string;
  templateVariables?: Record<string, unknown>;
  scssVariables?: Record<string, unknown>;
  scriptVariables?: Record<string, unknown>;
  primaryMode?: boolean;
  manuallyInjectedProps?: Record<string, string | number | boolean>;
  templateTabsDepth?: number;
};

type Emits = {
  (event: 'change', value: ComponentAttributes): void;
  (event: 'change:slots', newSlots: Attributes, oldSlots: Attributes): void;
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
  if (type === AttributeType.wysiwyg) {
    return 'mk-input-wysiwyg';
  }
  if (type === AttributeType.select) {
    return 'mk-input-select';
  }
  return '';
}

function createControllers(def: AttributesDefinition) {
  const o: AttributesControllers = {};
  const keys = Object.keys(def);
  for (const key of keys) {
    o[key] = {
      ...def[key],
      inputOptions: {
        placeholder: def[key].componentDefault ? def[key].componentDefault.toString() : undefined,
        ...def[key].inputOptions,
      },
      key,
      input: createInputState({ value: def[key].default }),
    };
  }
  return o;
}

const propsControllers = props.definition?.props ? reactive(createControllers(props.definition.props)) : null;
const scssControllers = props.definition?.scss ? reactive(createControllers(props.definition.scss)) : null;
const slotsControllers = props.definition?.slots ? reactive(createControllers(props.definition.slots)) : null;

type ViewportInputValue = number | null;

const viewportOptions: RadioInputOption<ViewportInputValue>[] = [
  { label: 'L', value: 1024 },
  { label: 'M', value: 768 },
  { label: 'S', value: 360 },
];

const viewportState = ref<InputState<ViewportInputValue>>(
  createInputState({
    value: null,
  }),
);

const anyInteractablePropsController = computed(() => {
  if (!isValue(propsControllers)) {
    return false;
  }
  for (const key in propsControllers) {
    if (resolveInputName(propsControllers[key].type)) {
      return true;
    }
  }
  return false;
});

const anyInteractableScssController = computed(() => {
  if (!isValue(scssControllers) || Object.keys(scssControllers).length === 0) {
    return false;
  }
  return true;
});

function mapControllersValues(controllers: AttributesControllers | null) {
  if (!isValue(controllers)) {
    return {};
  }
  const o: Attributes = {};
  const keys = Object.keys(controllers);
  for (const key of keys) {
    o[key] = controllers[key].input.value ?? undefined;
  }
  return o;
}

const propsAttributes = computed(() => mapControllersValues(propsControllers));

const scssAttributes = computed(() => mapControllersValues(scssControllers));

const slotsAttributes = computed(() => mapControllersValues(slotsControllers));

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

function handleSlotsValueChange(key: string, newState: InputState<any>) {
  if (isValue(slotsControllers)) {
    slotsControllers[key].input = newState;
  }
}

function isRealValue<T>(value: T) {
  return isValue(value)
  && (isString(value) ? value !== '' : true)
  && (isBoolean(value) ? value : true);
}

function isDefaultComponentValue(controller: AttributeController) {
  if (isValue(controller.componentDefault) && !controller.required) {
    return isEqual(controller.componentDefault, controller.input.value);
  }
  return false;
}

const templateVars = computed(() => {
  const variables = { ...props.templateVariables };
  const tProps = [];
  if (isValue(propsControllers)) {
    const keys = Object.keys(propsControllers);
    for (const key of keys) {
      const controller = propsControllers[key];
      const { value } = controller.input;
      const paramKey = paramCase(key);
      if (controller.type === AttributeType.vModel) {
        tProps.push(`v-model="${key}"`);
      } else if (controller.type === AttributeType.vModelKey) {
        tProps.push(`v-model:${paramKey}="${key}"`);
      } else if (controller.type === AttributeType.reference) {
        tProps.push(`:${paramKey}="${key}"`);
      } else if (isRealValue(value) && !isDefaultComponentValue(controller)) {
        if (controller.type === AttributeType.boolean) {
          tProps.push(paramKey);
        } else if (controller.type === AttributeType.number) {
          tProps.push(`:${paramKey}="${value}"`);
        } else if (controller.type === AttributeType.select) {
          const selectOptions = controller.inputOptions as SelectInputOptions<unknown>;
          const valueOption = selectOptions.options.find((option) => option.value === value);
          if (controller.renderOptions?.enumKey && isDef(valueOption)) {
            tProps.push(`:${paramKey}="${controller.renderOptions?.enumKey(valueOption.value)}"`);
          } else {
            tProps.push(`:${paramKey}="${value}"`);
          }
        } else {
          tProps.push(`${paramKey}="${value}"`);
        }
      }
    }
    if (props.manuallyInjectedProps) {
      const injectedPropsKeys = Object.keys(props.manuallyInjectedProps);
      for (const key of injectedPropsKeys) {
        const paramKey = paramCase(key);
        const value = props.manuallyInjectedProps[key];
        if (isRealValue(value)) {
          if (isBoolean(value)) {
            tProps.push(paramKey);
          } else if (isNumber(value)) {
            tProps.push(`:${paramKey}="${value}"`);
          } else {
            tProps.push(`${paramKey}="${value}"`);
          }
        }
      }
    }
  }
  const emits = props.definition?.emits;
  if (isValue(emits)) {
    const keys = Object.keys(emits);
    for (const key of keys) {
      const value = emits[key];
      tProps.push(`@${key}="${value}"`);
    }
  }
  const propsLength = tProps.length;
  const computedTabs = Array(props.templateTabsDepth ?? 1).fill('  ').join('');
  const computedCloseTabs = Array((props.templateTabsDepth ?? 1) - 1).fill('  ').join('');
  if (propsLength === 0) {
    variables.props = '';
  } else if (propsLength === 1) {
    variables.props = ` ${tProps[0]}`;
  } else {
    variables.props = `\n${computedTabs}${tProps.join(`\n${computedTabs}`)}\n`;
  }
  variables.props += `${computedCloseTabs}`;
  if (isValue(slotsControllers)) {
    variables.hasSlots = Object.values(slotsAttributes.value).reduce(
      (acc: number, value) => (value === true ? acc + 1 : acc),
      0,
    ) > 0;
    variables.slots = Object.entries(slotsAttributes.value).reduce(
      (acc, [key, value]) => {
        acc[camelCase(key)] = value;
        return acc;
      },
      {} as Record<string, AttributeValueType>,
    );
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
      variables.scss = `    ${tProps.join('\n    ')}`;
    }
  }
  if (variables.scss === '') {
    variables.scss = null;
  }
  return variables;
});

const scriptVars = computed(() => props.scriptVariables);

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
  return style === '' ? undefined : style;
});

watch([propsAttributes, scssAttributes, slotsAttributes], ([
  newPropsAttributes,
  newScssAttributes,
  newSlotsAttributes,
]) => {
  emit('change', {
    props: newPropsAttributes,
    scss: newScssAttributes,
    slots: newSlotsAttributes,
  });
});

watch(slotsAttributes, (newSlotsAttributes, oldSlotsAttributes) => {
  emit('change:slots', newSlotsAttributes, oldSlotsAttributes);
});

onMounted(() => {
  emit('change', {
    props: propsAttributes.value,
    scss: scssAttributes.value,
    slots: slotsAttributes.value,
  });
});

defineExpose({
  propsControllers,
  scssControllers,
  slotsControllers,
});

</script>

<style lang="scss">
.mk-AppSandboxPreview {
    $this: &;

    display: flex;
    flex-direction: column;
    gap: var(--app-m-4);
    padding: var(--app-m-2);
    background-color: var(--app-background-color-soft);
    border-radius: var(--app-border-radius);

    &-content {
        display: flex;
        gap: var(--app-m-4);
        align-items: flex-start;

        &[data-is-viewport-active="true"] {
            flex-direction: column-reverse;
            align-items: stretch;

            #{$this} {
                &-preview {
                    position: static;
                }

                &-viewport {
                    padding-top: var(--app-m-5);
                }
            }
        }
    }

    &-controllers {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: var(--app-m-2);

        &-list {
            display: flex;
            flex: 1;
            flex-direction: column;
            gap: var(--app-m-2);
            padding: var(--app-m-3) var(--app-m-4);
            background-color: var(--app-background-color);
            border: 3px dashed var(--app-border-color);
            border-radius: 8px;
            transition: border-color var(--app-transition-duration-background);

            &:hover {
                border-color: var(--app-primary-color);
            }
        }
    }

    &-preview {
        position: sticky;
        top: var(--app-m-2);
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: var(--app-m-2);

        &-title {
            display: flex;
            gap: var(--app-m-2);
            align-items: center;
            justify-content: space-between;
        }

        &-viewport {
            display: flex;
            gap: var(--app-m-1);
            align-items: center;

            .mk-AppInputRadio {
                &-options {
                    display: flex;
                    gap: var(--app-m-2);
                }

                &-input {
                    padding: 0;
                }
            }
        }

        &-toolbar {
            display: flex;
            gap: var(--app-m-1);
            align-items: center;
        }
    }

    &-viewport {
        position: relative;

        &-scale {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            font-size: 12px;

            // font-weight: 500;
            color: var(--app-border-color);
            text-align: center;
            user-select: none;

            &::after {
                display: block;
                width: 100%;
                height: 8px;
                margin-top: var(--app-m-1);
                content: "";
                border: 1px dashed var(--app-border-color);
                border-bottom: none;
            }
        }

        > div {
            overflow: auto;
        }
    }

    &-component {
        flex: 1;
        padding: var(--app-m-3) var(--app-m-4);
        background-color: var(--app-background-color);
        border: 3px dashed var(--app-border-color);
        border-radius: 8px;
        transition: border-color var(--app-transition-duration-background);

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

import {
  computed, reactive, ref, watch,
} from 'vue';
import { type InputModel, type InputState, createInputState } from '@patriarche/melkor';
import type { PropDefinition, PropsDefinition } from '@/lib/definition';

type HookParams = {
  definition: PropsDefinition;
};

export type SandboxPreviewControllers = {
  [key:string]: PropDefinition & {
    key: string;
    input: InputState<any>;
  };
};

export default function useSandboxPreview(params: HookParams) {
  const { definition } = params;

  function createControllers(def: PropsDefinition) {
    const o: SandboxPreviewControllers = {};
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

  function mapProps(controllers: SandboxPreviewControllers) {

  }

  const controllers = reactive(createControllers(definition));

  watch(controllers, (newControllers) => {
    const o: Record<string, unknown> = {};
    const keys = Object.keys(newControllers);
    for (const key of keys) {
      o[key] = newControllers[key].input.value;
    }
    return o;
  });

  props.

  function onControllerChange(key: string, newState: InputState<any>) {
    controllers[key].input = newState;
  }

  return {
    props,
    controllers,
    onControllerChange,
  };
}

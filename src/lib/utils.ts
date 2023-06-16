import { compile } from 'handlebars';
import isString from 'lodash/isString';
import {
  AttributeType, type AttributeDefinition, type AttributesDefinition, type ComponentAttributes,
} from '@/lib/definition';

export function createScssControllersConfig(variableNames: string[]): AttributesDefinition {
  return variableNames.reduce((acc, name) => {
    acc[name] = {
      type: AttributeType.string,
      required: false,
      default: null,
    };
    return acc;
  }, {} as AttributesDefinition);
}

export function createSlotsControllersConfig(variableNames: (string | [string, Partial<AttributeDefinition>])[]): AttributesDefinition {
  return variableNames.reduce((acc, value) => {
    if (isString(value)) {
      acc[value] = {
        type: AttributeType.boolean,
        required: false,
        default: false,
      };
    } else {
      const [name, prop] = value;
      acc[name] = {
        ...prop,
        type: AttributeType.boolean,
        required: prop.required ?? false,
        default: prop.default ?? false,
      };
    }
    return acc;
  }, {} as AttributesDefinition);
}

export function mapSandboxAttributesWithoutInputState(newAttributes: ComponentAttributes) {
  const newProps = newAttributes.props;
  const { state, ...otherProps } = newProps;
  return {
    ...newAttributes,
    props: otherProps,
  };
}

export function mapSandboxAttributesWithoutPropsKeys<T extends ComponentAttributes>(newAttributes: T, keys: readonly (keyof T['props'])[]) {
  type NewProps = Omit<T['props'], typeof keys[number]>;
  const newProps: NewProps = {};
  for (const key of Object.keys(newAttributes.props)) {
    if (!keys.includes(key)) {
      newProps[key as keyof NewProps] = newAttributes.props[key];
    }
  }
  return {
    ...newAttributes,
    props: newProps,
  };
}

export async function createTemplate(filmePath: string) {
  const res = await fetch(filmePath, { method: 'get' });
  const template = await res.text();

  return (variable: Record<string, unknown>) => {
    const hbsTemplate = compile(template);
    const render = hbsTemplate(variable);
    return render.trim();
  };
}

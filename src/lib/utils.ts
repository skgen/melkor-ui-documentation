import { compile } from 'handlebars';
import { AttributeType, type AttributesDefinition, type ComponentAttributes } from '@/lib/definition';

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

export function createSlotsControllersConfig(variableNames: string[]): AttributesDefinition {
  return variableNames.reduce((acc, name) => {
    acc[name] = {
      type: AttributeType.boolean,
      required: false,
      default: false,
    };
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

export async function createTemplate(filmePath: string) {
  const res = await fetch(filmePath, { method: 'get' });
  const template = await res.text();

  return (variable: Record<string, unknown>) => {
    const hbsTemplate = compile(template);
    const render = hbsTemplate(variable);
    return render.trim();
  };
}

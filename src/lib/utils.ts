import { AttributeType, type AttributesDefinition } from '@/lib/definition';

// eslint-disable-next-line import/prefer-default-export
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

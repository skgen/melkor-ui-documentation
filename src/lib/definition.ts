import type { InputState } from '@patriarche/melkor';

export enum AttributeType {
  string,
  number,
  boolean,
  hidden,
  reference,
  function,
  vModel,
  vModelKey,
  wysiwyg,
  select,
}

export type AttributeDefinition = {
  type: AttributeType;
  required: boolean;
  default: any;
  componentDefault?: any;
  inputOptions?: { [key: string]: unknown };
  renderOptions?: {
    valueAsSelectLabel?: boolean;
  };
};

export type AttributeController<T = any> = AttributeDefinition & {
  key: string;
  input: InputState<T>;
};

export type AttributesDefinition = {
  [key: string]: AttributeDefinition;
};

export type AttributesControllers = {
  [key: string]: AttributeController;
};

export type EmitAttributesDefinition = {
  [key: string]: string;
};

export type ComponentDefinition = {
  props?: AttributesDefinition;
  scss?: AttributesDefinition;
  slots?: AttributesDefinition;
  emits?: EmitAttributesDefinition;
};

export type ComponentAttributes = {
  props: Attributes;
  scss: Attributes;
  slots: Attributes;
};

export type Attributes = {
  [key:string]: AttributeValueType;
};

// It's intended as we can pass any type of props, not really meant to be strictly type checked
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AttributeValueType = any;

export enum CodeLanguage {
  typescript = 'typescript',
  json = 'json',
  template = 'template',
  vue = 'vue',
  scss = 'scss',
  bash = 'bash',
}

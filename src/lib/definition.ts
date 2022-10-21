import type { InputState } from '@patriarche/melkor';

export enum AttributeType {
  string,
  number,
  boolean,
  hidden,
  reference,
  function,
  vModel,
}

export type AttributeDefinition = {
  type: AttributeType;
  required: boolean;
  default: any;
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

export type ComponentDefinition = {
  props?: AttributesDefinition;
  scss?: AttributesDefinition;
};

export type ComponentAttributes = {
  props: Attributes;
  scss: Attributes;
};

export type Attributes = {
  [key:string]: AttributeValueType;
};

export type AttributeValueType = string | number | boolean;

export enum CodeLanguage {
  typescript = 'typescript',
  json = 'json',
  template = 'template',
  vue = 'vue',
  scss = 'scss',
}

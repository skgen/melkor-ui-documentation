export enum PropType {
  string,
  number,
  boolean,
  hidden,
  reference,
  function,
  vModel,
}

export type PropDefinition = {
  type: PropType;
  required: boolean;
  default: any;
};

export type PropsDefinition = {
  [key: string]: PropDefinition;
};

export type ComponentProps = Record<string, string | number | boolean>;

export enum CodeLanguage {
  typescript = 'typescript',
  json = 'json',
  template = 'template',
  vue = 'vue',
  scss = 'scss',
}

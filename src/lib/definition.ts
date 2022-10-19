export enum PropType {
  string,
  number,
  boolean,
  hidden,
}

export type PropDefinition = {
  type: PropType;
  required: boolean;
  default: any;
};

export type PropsDefinition = {
  [key: string]: PropDefinition;
};

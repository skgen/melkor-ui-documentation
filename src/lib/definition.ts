export enum PropType {
  string,
  number,
  boolean,
}

export type PropDefinition = {
  type: PropType;
  required: boolean;
  default: any;
};

export type PropsDefinition = {
  [key: string]: PropDefinition;
};

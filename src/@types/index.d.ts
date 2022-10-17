export type NonArray<T, D> = T extends D[] ? never : T;

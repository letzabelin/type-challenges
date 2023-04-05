// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md

export type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends Record<string, unknown>
    ? DeepReadonly<T[key]>
    : T[key] extends [infer First, ...infer Rest]
      ? readonly [DeepReadonly<First>, ...DeepReadonly<Rest>]
      : T[key];
};

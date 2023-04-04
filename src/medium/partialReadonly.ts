// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md

export type PartialReadonly<T, K extends keyof T = keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
} & {
  readonly [key in K]: T[key];
};

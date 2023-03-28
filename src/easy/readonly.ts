// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

export {};

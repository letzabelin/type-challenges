// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

export {};

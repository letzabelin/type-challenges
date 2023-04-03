// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

export type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

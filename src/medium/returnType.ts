// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md

export type MyReturnType<T> = T extends (...args: any) => infer S ? S : never;

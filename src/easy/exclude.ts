// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

export type MyExclude<T, U> = T extends U ? never : T;

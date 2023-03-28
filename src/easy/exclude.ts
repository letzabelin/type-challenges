// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MyExclude<T, U> = T extends U ? never : T;

export {};

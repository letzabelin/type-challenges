// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md

export type Unshift<T extends any[], U> = [U, ...T];

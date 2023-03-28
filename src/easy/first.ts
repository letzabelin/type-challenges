// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

// eslint-disable-next-line
type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

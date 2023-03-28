// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

// eslint-disable-next-line
type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T extends [infer FirstType, ...infer _Rest] ? FirstType : never;

export {};

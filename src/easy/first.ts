// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

export type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

// export type First<T extends any[]> = T extends [] ? never : T[0];
// export type First<T extends any[]> = T extends [infer FirstType, ...infer _Rest] ? FirstType : never;

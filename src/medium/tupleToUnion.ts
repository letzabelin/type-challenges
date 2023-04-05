// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md

export type TupleToUnion<T extends unknown[]> = T[number];

// export type TupleToUnion<T> = T extends Array<infer Items> ? Items : never;

// export type TupleToUnion<T> = T extends [infer First, ...infer Rest]
//   ? First | TupleToUnion<Rest>
//   : never;

// https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md

export type Last<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? Rest extends []
    ? First
    : Last<Rest>
  : never;

// export type Last<T extends unknown[]> = [never, ...T][T['length']];

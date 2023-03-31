// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md

type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<S>() => S extends Y ? 1 : 2) ? true : false;

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equals<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

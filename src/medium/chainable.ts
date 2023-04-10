// https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md

export type Chainable<O extends Record<string, any> = {}> = {
  option<T extends string, S>(
    key: T extends keyof O ? never : T,
    value: S,
  ): Chainable<
    Omit<O, T> & {
      [K in T]: S;
    }
  >;

  get(): O;
};

// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type If<C extends boolean, T, F> = C extends true ? T : F;

export {};

// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

export type Concat<T extends any[], U extends any[]> = [...T, ...U]

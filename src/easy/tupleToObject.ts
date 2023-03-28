// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md

// eslint-disable-next-line
type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key;
};

export {};

// Given an array, transform it into an object type and the key/value must be in the provided array.

type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type Result = TupleToObject<typeof tuple>;

// eslint-disable-next-line
const result: Result = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y',
};

export {};

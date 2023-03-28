// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

// eslint-disable-next-line
type Length<T extends readonly any[]> = T['length']

export {};

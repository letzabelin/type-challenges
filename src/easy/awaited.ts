// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer K>
  ? K extends PromiseLike<any> ? MyAwaited<K> : K
  : never;

export {};

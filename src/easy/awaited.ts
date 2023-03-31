// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

export type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer K>
  ? K extends PromiseLike<any> ? MyAwaited<K> : K
  : never;

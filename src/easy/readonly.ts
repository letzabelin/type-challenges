// Implement the built-in Readonly<T> generic without using it.
// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

// eslint-disable-next-line
todo.title = 'Hello';
// eslint-disable-next-line
todo.description = 'barFoo';

export {};

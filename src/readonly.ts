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

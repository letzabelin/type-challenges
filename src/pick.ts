type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

// eslint-disable-next-line
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

export {};

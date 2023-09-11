"use client"
import React, { useState, useEffect } from 'react';

import * as utils from '@/utils/utils'
import * as styles from '@/styles/styles'

import Link from 'next/link'
import { TodoItem } from '@/components/TodoItem'

type Todo = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const todosData = await utils.getTodos();
      setTodos(todosData);
    }

    fetchTodos();
  }, []);

  async function deleteTodo(id: string) {
    const res = await utils.deleteTodo(id);
    if (res) {
      const todosData = await utils.getTodos();
      setTodos(todosData);
    }
  }

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className={styles.buttonStyle} href="/new">New</Link>
      </header>

      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={utils.toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </>
  )
}

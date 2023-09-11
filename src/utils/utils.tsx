"use server"
import { prisma } from '@/db'

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return todos;
  } catch (error) {
    throw new Error(`Error fetching todos: ${(error as Error).message}`);
  }
}

export async function createTodo(data: FormData) {
  try {
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid title");
    }

    await prisma.todo.create({ data: { title, complete: false } });
    return true;
  } catch (error) {
    throw new Error(`Error creating todo:${(error as Error).message}`);
  }
}

export async function toggleTodo(id: string, complete: boolean) {
  try {
    await prisma.todo.update({ where: { id }, data: { complete } });
  } catch (error) {
    throw new Error(`Error toggling todo: ${(error as Error).message}`);
  }
}

export async function deleteTodo(id: string) {
  try {
    await prisma.todo.delete({ where: { id } });
    return true;
  } catch (error) {
    throw new Error(`Error deleting todo: ${(error as Error).message}`);
  }
}


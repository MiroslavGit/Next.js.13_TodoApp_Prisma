"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function TodoItem(props: TodoItemProps) {
  return (
    <li className="flex gap-1 justify-between items-center">
      <div>
        <input id={props.id} type="checkbox" defaultChecked={props.complete} onChange={(e) => { props.toggleTodo(props.id, e.target.checked) }} className="cursor-pointer peer" />
        <label htmlFor={props.id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{props.title}</label>
      </div>
      <button onClick={() => props.deleteTodo(props.id)} className="bg-red-700 p-2 rounded my-1 hover:bg-red-600">Delete</button>
    </li>
  )
}
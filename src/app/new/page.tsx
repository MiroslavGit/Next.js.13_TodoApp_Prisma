import * as utils from '@/utils/utils'
import * as styles from '@/styles/styles'

import { redirect } from 'next/navigation'

import Link from 'next/link'

async function createTodo(data: FormData) {
  "use server"
  const res = await utils.createTodo(data)
  res ? redirect("/") : null
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New Todo</h1>
        <Link className={styles.buttonStyle} href="/new">New</Link>
      </header>

      <form action={createTodo} className='flex gap-4 flex-col'>
        <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" />
        <div className='flex gap-2 justify-end'>
          <Link className={styles.buttonStyle} href="..">Cancel</Link>
          <button className={styles.buttonStyle} type='submit'>Create</button>
        </div>
      </form>
    </>
  )
}
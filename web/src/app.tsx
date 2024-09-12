import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(5)

  function increment() {
    setCount(count + 1)
  }

  fetch('https://localhost:3333/summary')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })

  return (
    <Dialog>
      <button type="button" onClick={increment}>
        Incrementar
      </button>
      <h1 className="text-4xl">{count}</h1>
      {/* <EmptyGoals /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}

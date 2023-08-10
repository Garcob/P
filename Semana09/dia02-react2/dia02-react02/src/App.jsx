
import {useState} from "react"

function App() {

  const default_TODOS = [


      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
        },
        {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
        },
        {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
        }
  ]

  const [todos, pepito] = useState(default_TODOS)
  return (
    <>
      <main className="w-full max-w-sms mx-auto mt-10 rounded-lg bg-yellow-100 border border-yellow-500 p-4 shadow-lg">
       <h1 className="text-2xl font-bold"> HOLA TODOS </h1>

       <input 
          className="w-full border my-3 p-3"
          placeholder="¿que hacer hoy?"

        />
       <section className="mt-5">
       

        <ul className="flex flex-col gap-3">
            {todos.map(todo=>{
              return (
                     <li
                       key={todo.id}
                       className={`flex text-stone-900 ${todo.completed ? 'line-through': ''}
                       `}
                      >
                       <input type="checkbox className="mr-4 />
                       <span> {todo.title}</span>
                     </li>
              )
            })}
        </ul>
       </section>
      </main>
    </>

    
  )
}

export default App

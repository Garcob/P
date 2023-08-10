const taskInput = document.querySelector('.task__input')
const taskList = document.querySelector('.task__list')
const taskClear = document.querySelector('.Clear')

//localStorage.setItem('frutas', 'mazanas,peraas,plátanos')
// localStorage.getItem('frutas')


// let tasks = [
//   {
//     title: 'Estudiar JavaScript',
//     done: false
//   },{
//     title: 'Salir al receso a las 9',
//     done: true    
//   },{
//     title: 'Realizar el reto del día',
//     done: false    
//   }
// ]

let tasks = JSON.parse(localStorage.getItem('tasks')) || []  // "parse" --> convierte de cadena a str

taskClear.addEventListener('click', function(event){
  const completeTasks = tasks.filter(task => task.done === false)
  tasks = completeTasks
  renderTasks()
  console.log(completeTasks)

  localStorage.setItem('tasks', JSON.stringify(tasks)) 

})


taskInput.addEventListener('keypress', function(event) {
  // Lógica de la app
  // console.log(event)

  if(value === ''){
    return
  }


  if (event.key === 'Enter') {
    // console.log('agregando nueva tarea')
    const value = event.target.value
    // console.log(value)

    const newTask = {
      title: value,
      done: false
    }

    console.log(newTask)

    tasks.push(newTask)

    localStorage.setItem('tasks', JSON.stringify(tasks)) // "stringify" lo vuelve de objeto(str) a array(cadena)

    console.log(tasks)

    taskInput.value = ''

    renderTasks()
  }
})


function checkTask(event, currentIndex) {
  console.log('Funciona!')
  // TODO: Hacer que el todo se tache usando solo Javascript
  event.target.parentElement.classList.toggle('isChecked')
  const taskSelected = tasks[currentIndex]
  taskSelected.done = !taskSelected.done

  console.log(tasks)

  localStorage.setItem('tasks', JSON.stringify(tasks)) 
}

function removeTask(event, currentIndex) {
  console.log('Eliminando...', currentIndex)
  event.target.parentElement.remove()
  const newTasks = tasks.filter((task, index) => index !== currentIndex)
  console.log(newTasks)
  tasks = newTasks

  localStorage.setItem('tasks', JSON.stringify(tasks))
}



function renderTasks() {
  let lista = ''

  // TODO: Añadir el contenido " no hay tareas registradas

  if (tasks.length === 0){

    taskList.innerHTML = `<li> No hay tareas registradas </li>`
    return

  }


  tasks.forEach(function (task, index) {
    // console.log(task)
    lista = lista + `
      <li class="py-1 flex justify-between align-center gap-3">
        <input
          type="checkbox"
          onchange="checkTask(event, ${index})"
          ${task.done ? 'checked' : ''}
        />
        <div class="w-full">${task.title}</div>
        <button class="text-red-700 border border-red-700 font-medium rounded-full text-sm p-1 px-3" onclick="removeTask(event, ${index})">Borrar</button>
      </li>
    `
  })

  taskList.innerHTML = lista
}

renderTasks()
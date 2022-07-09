import Header from "./components/Header"
import Tareas from "./components/Tareas"
import {useState} from 'react'
import AddTarea from "./components/AddTarea"

function App() {

  const [showAddTarea, setShowAddTarea] = useState(false)
  
  const [tareas, setTareas] = useState ([
    {
        id: 1,
        texto: 'Ir al doctor',
        fecha: '5 de Julio de 2022',
        terminada: true,
    },
    {
        id: 2,
        texto: 'Ir al cine',
        fecha: '10 de Julio de 2022',
        terminada: false,
    },
    {
        id: 3,
        texto: 'Ir al supermercado',
        fecha: '11 de Julio de 2022',
        terminada: false,
    }
])

//Agregar tarea
const addTarea = (tarea) => {
  //console.log(tarea)
  const id= Math.floor(Math.random()*10000) + 1
  const nuevaTarea= {id, ...tarea }
  setTareas([...tareas, nuevaTarea ])
}

//Borrar tarea
const deleteTarea = (id) => {
  setTareas(tareas.filter((tarea) => tarea.id !== id))
}

//Toogle terminado 
const toggleTerminado = (id) => {
  //console.log(id)
  setTareas(tareas.map ((tarea) => tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea))
}

  return (
    <>
    <div className='container'>
      <Header titulo='Administrador de Tareas' onAdd={() => setShowAddTarea(!showAddTarea)} showAdd={showAddTarea}/>
      {showAddTarea && <AddTarea onAdd={addTarea}/> }
      {tareas.length > 0 ? (<Tareas tareas={tareas} onDelete={deleteTarea} onToggle={toggleTerminado}/>) : ('No hay tareas para mostrar')}
      
    </div>
    </>
  )
}

export default App

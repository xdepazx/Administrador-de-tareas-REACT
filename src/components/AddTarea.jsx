import {useState} from 'react'

const AddTarea = ({onAdd}) => {

const [texto, setTexto] = useState('')
const [fecha, setFecha] = useState('')
const [terminada, setTerminada] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if(!texto) {
        alert ('Porfavor teclea un texto')
        return
    }
    onAdd({texto, fecha, terminada})

    setTexto('')
    setFecha('')
    setTerminada(false)
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Tareas</label>
            <input type="text" placeholder='Teclea una Tarea' value={texto} onChange={(e)=> setTexto(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Fecha</label>
            <input type="text" placeholder='Teclea una Fecha' value={fecha} onChange={(e)=> setFecha(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Terminada</label>
            <input type="checkbox" value={terminada} onChange={(e)=> setTerminada(e.currentTarget.checked)}/>
        </div>
        <input className="btn btn-block" type="submit" value='Agregar tarea' />
    </form>
  )
}

export default AddTarea

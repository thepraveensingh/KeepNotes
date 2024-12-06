import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const Note = (props) => {
  return (
    <div className='flex bg-white shadow-lg shadow-zinc-300 border-b-2 mb-2 p-4  border-black'>
      <div >
        <h1 className='font-bold'>{props.title}</h1>
        <p>{props.descrip}</p>
        <button
          onClick = {()=>{
            props.deleteNote(props.id)
          }}
         className='rounded-full shadow-lg shadow-zinc-400'><DeleteIcon className='text-red-500'/>
        </button>
      </div>
    </div>
  )
}

export default Note

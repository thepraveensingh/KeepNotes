import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

const CreateNote = (props) => {
  const [expand,setExpand] = useState(false);
  const [note,setNote] = useState({title : "", description : ""});
  const handleChange = (event) =>{
    const {name,value} = event.target;
    setNote((prev)=>{
      return{...prev,[name] : value}
    })
  }
  const handleExpand = () => {
    setExpand(true)
  }
  const handleDoubleExpand = () => {
    setExpand(false)
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white w-[50%] p-2 mt-8 rounded-lg shadow-lg shadow-slate-300">
          <form className="flex flex-col gap-4" >
            {expand && <input 
              name = 'title'
              value={note.title}
              onChange={handleChange}
              placeholder="Title" 
              className="w-full p-3 text-2xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-600"
            />}
            
            <textarea 
              onClick={handleExpand}
              onDoubleClick={handleDoubleExpand}
              name = 'description'
              value={note.description}
              onChange={handleChange}
              placeholder="Write a Note..." 
              className="w-full p-3 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 resize-none"
              rows="5"
            />
            
            {expand && <button
              onClick={(e)=>{
                e.preventDefault();
                props.passNote(note);
                setNote({title : "", description : ""});
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 active:scale-95"
            >
              <AddBoxIcon /> Add Note
            </button>}
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;

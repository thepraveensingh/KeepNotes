import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CreateNote from './components/CreateNote'
import Footer from './components/Footer'
import Note from './components/Note'

function App(){
  const [noteslist,setNoteslist] = useState([]);
  const addEvent = (note) =>{
    setNoteslist((prev)=>{
      return [...prev,note];
    })
    console.log(note); 
  }
  const removenote = (id) =>{
    setNoteslist((prev)=>{
      return prev.filter((curr,index)=>{return index != id})
    }
    )
  }
  return<>

    <Header/>
    <CreateNote passNote = {addEvent}/>
    {noteslist.map((curr,index)=>{
      return <Note key = {index} id = {index} title = {curr.title} descrip = {curr.description} deleteNote={removenote}/>
    })}
      
    <Footer />
  </>
}

export default App

import { useState } from 'react'
import Nav from './components/Nav'
import NewNote from './components/NewNote'
import NoteList from './components/NoteList'
function App() {

  return (
<>
<Nav />
  <NewNote />
  <NoteList />
  <img src="test.png" alt="" />
</>
  )
}

export default App

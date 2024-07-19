import React from 'react'

export default function NewNote() {
    return (
       <div className='new-note-container'>
        <input placeholder='New Note' />
        <button>Add</button>
       </div>
    )
}
import react from 'react';
import NoteCard from './NoteCard';
export default function NoteList() {
    let notes = [
        'gym',
        'study',
        'cook'
    ];

    return (
        <ul className='note-list-container'>
            {notes.map((note, noteIndex) => {
                return (
                   <NoteCard key={noteIndex}>
                    <p>{note}</p>
                   </NoteCard>
                )
            })}
        </ul>
    )
}
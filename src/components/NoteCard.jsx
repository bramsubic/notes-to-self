import react from 'react';

export default function NoteCard(props) {
    const {children} = props;
    return (
        <li className='noteItem'>
            {children}
        </li>
    )
}
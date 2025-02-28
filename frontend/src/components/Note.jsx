/* eslint-disable react/prop-types */
import '../styles/Note.css';

export default function Note({ note, onDelete }) {
    const fomrattedDate = new Date(note.created_at).toLocaleDateString('en-US');

    return <div className='note-container'>
        <p className='note-title'>{note.title}</p>
        <p className='note-content'>{note.content}</p>
        <p className='note-date'>{fomrattedDate}</p>
        <button className='delete-button' onClick={() => onDelete(note.id)}>
            Delete
        </button>
    </div>
}
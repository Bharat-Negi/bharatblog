"use client"
import NotesContext from './notesContext'
import teamData from '@/json/team.json'

const NoteState = (props) => {
    const data = teamData;
    return(
        <NotesContext value={data}>
            {props.children}
        </NotesContext>
    )
}

export default NoteState;
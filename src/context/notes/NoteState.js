"use client"
import NotesContext from './notesContext'
import teamData from '@/json/team.json'

const NoteState = (props) => {
    const data = teamData;
    return(
        <NotesContext.Provider value={data}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;
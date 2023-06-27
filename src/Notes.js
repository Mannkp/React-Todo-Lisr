import { useState } from 'react';

export default function Notes() {


    const [inputVariable, setinputVariable] = useState("");

    const greet = () => {
        const heading = document.getElementById("mkheading");
        const notesContainer = document.getElementById("notesContainer");
        const note = document.createElement("div");
        note.classList.add('note-container');
        note.innerText = "Hi! and Namaste! from Mannkumar K. Pandya ";
        note.innerText += inputVariable;
        notesContainer.append(note);
    }

    const inputUpdate = (e) => {
        setinputVariable(e.target.value);
    }

    return (
        <>
            <div className='main'>
                <h1 id='mkheading'>React-Todo-List</h1>
                <input type='text' id='inp' onChange={inputUpdate}></input>
                <br/>
                <button onClick={greet} id="addBtn">Add</button>
                {/* <p>{inputVariable}</p> */}
            </div>

            <div id="notesContainer"></div>
        </>
    );
}

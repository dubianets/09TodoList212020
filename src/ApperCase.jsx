import React, {useState} from "react";

export default function ApperCase(props) {

    const [inputTitle, setInputTitle] = useState('')

    const addElem =() => {
        props.addElement(inputTitle)
        setInputTitle('')
    }

    return (
        <div>

    <input value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
    <button onClick={addElem}>ADD</button>

        </div>
    )
}
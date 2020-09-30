import React, {useState} from 'react';
import ListCounter from "./ListCounter";
import ApperCase from "./ApperCase";


const initialElement = [
    {id: 1, title: 'Vadim', secondName: 'Dubina', donestatus: false},
    {id: 2, title: 'Anastasya', secondName: 'Sunachkina', donestatus: false},
    {id: 3, title: 'Tim', secondName: 'Biden', donestatus: false},
    {id: 4, title: 'Aleks', secondName: 'Stuff', donestatus: false},
]

function App() {

const [list, setList] = useState(initialElement)

    const addElement = (newTitle) => {
    const newElement = {
        id:Math.random(),
        title: newTitle,
        secondName: 'Undefained',
        donestatus: false
    }
    const newList = [...list, newElement]
        setList(newList)
    }

    const deleteElement = (id) => {
        const newList = list.filter(el => el.id !== id)
        setList(newList)
    }

    const doneChanger = (id) => {
        const newList = list.map(el => {
            if(el.id === id) return {...el,donestatus: !el.donestatus}
            return el
        })
        setList(newList);
    }

    return (

        <div>

            <ApperCase addElement={addElement}/>
            <hr/>

            {list.map(el => <ListCounter doneChanger={doneChanger} deleteElement={deleteElement} el={el}/>)}
<hr/>
        </div>
    )
}

export default App;

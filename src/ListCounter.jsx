import React from "react";


function ListCounter(props) {
    return (

        <div >

            <li style={{
                        textDecoration: props.el.donestatus ? 'line-through' : 'none'}}>

                {props.el.title}
            </li>
                {props.el.secondName}
                <button onClick={() => props.deleteElement(props.el.id)}>delet</button>
                <button onClick={() =>props.doneChanger(props.el.id)}>done</button>



        </div>
    )
}

export default ListCounter;
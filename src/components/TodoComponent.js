import React from 'react'
import './styles/TodoComponent.css'
export default function TodoComponent({todo,removeTodo}) {
    const {title,id} = todo
    return (
        <div className="todo" >
            <p className="todo__title">{title}</p>
            <button className="todo__remove" onClick={(e)=>{removeTodo(id,e)}} >&#10003;</button>
        </div>
    )
}

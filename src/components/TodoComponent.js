import React from 'react'
import './styles/TodoComponent.css'
export default function TodoComponent({todo}) {
    const {title} = todo
    return (
        <div className="todo" >
            <div className="todo__title">{title}</div>
        </div>
    )
}

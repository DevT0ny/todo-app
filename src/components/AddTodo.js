import React, { Component } from 'react'
import './styles/AddTodo.css'
export default class AddTodo extends Component {
    state={
        todo:{
            title:"",
            id:null
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.todo.title.match(/\w+/)==null) { e.target.children[0].setAttribute("data-error","data-error");return false}
        this.props.addTodo(this.state.todo)
        e.target.children[0].value=null;
        this.setState({todo:{title:"",id:null}})
    }

    handleChange = e => {
        let value = e.target.value
        if (!value.match(/\w+/))
            e.target.setAttribute("data-error","data-error")
        else  
            e.target.removeAttribute("data-error")
        
        this.setState({
            todo: {
                [e.target.name]:value,
                id:new Date().getTime()
            }
        })
    }

    render() {
        return (
                <form className="form" onSubmit={this.handleSubmit} autoComplete="off" > 
                    <input type="text" id="todoInput" className="form__title" name="title" onChange={this.handleChange} />
                    <input type="submit" className="form__submit" value="+"/>
                    <span className="form__anim" id="oh" ></span>
                </form> 
        )
    }
}

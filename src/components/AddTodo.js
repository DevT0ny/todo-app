import React, { Component } from 'react'
import './styles/AddTodo.css'
export default class AddTodo extends Component {
    state={
        todo:{
            title:""
        },
        err:false

    }
    // showErr()
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.props)
        if (this.state.title.match(/\w+/)==null) {
            // showErr();
             return false
            }
        this.props.addTodo(this.state)
    }
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    render() {
        return (
            // <div className="form">
                <form className="form" onSubmit={this.handleSubmit}> 
                    <label htmlFor="title" className="form__title__label">
                        
                        <input type="text" id="todoInput" className="form__title__input" name="title" onChange={this.handleChange} />
                    </label>
                    <input type="submit" className="form__submit" value="Add"/>
                </form> 
            // </div>
        )
    }
}

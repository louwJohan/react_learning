import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.selectOption = React.createRef();
        this.comments = React.createRef();    
    }


    handelSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.selectOption.current.value)
        console.log(this.comments.current.value)
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form</h2>
                <form onSubmit={this.handelSubmit}>
                    <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="id-name"
                        ref={this.inputName}
                    />
                    </div>
                    <div>
                    <label htmlFor="id-category">Query Category:</label>
                    <select 
                        id="id-category" 
                        name="category"
                        ref={this.selectOption} 
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea id="id-comments" name="comments" ref={this.comments}/>
                    </div>
                    <input type="submit" value="submit"/>                
                </form>
            </div>
        )
    }
}

export default UncontrolledForm
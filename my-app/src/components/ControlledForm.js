import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        comments:'',
        category:'website'
      }
    }

    handleNameChange = (event) => {
        this.setState({
                name: event.target.value
        })

    }

    handleCommentsChange = (event) => {
        this.setState({
                comments: event.target.value
        })

    }
    handleCategoryChange = (event) => {
        this.setState({
                category: event.target.value
        })

    }

    handelSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form</h2>
                <form onSubmit={this.handelSubmit}>
                    <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input 
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                        type="text" 
                        name="name" 
                        id="id-name"
                    />
                    </div>
                    <div>
                    <label htmlFor="id-category">Query Category:</label>
                    <select 
                        onChange={this.handleCategoryChange} 
                        id="id-category" 
                        name="category" 
                        value={this.state.category}
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea onChange={this.handleCommentsChange}id="id-comments" name="comments"/>
                    </div>
                    <input type="submit" value="submit"/>                
                </form>
            </div>
        )
    }
}

export default ControlledForm
import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }
    return(
        <div>
            <h2>Please fill out the form</h2>
            <form onSubmit={handelSubmit}>
                <div>
                <label htmlFor="id-name">Your Name:</label>
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    name="name" 
                    id="id-name"
                />
                </div>
                <div>
                <label htmlFor="id-category">Query Category:</label>
                <select 
                    onChange={(e) => setCategory(e.target.value)} 
                    id="id-category" 
                    name="category" 
                    value={category}
                >
                    <option value="website">Website issue</option>
                    <option value="order">Order issue</option>
                    <option value="general">General inquiry</option>
                </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea 
                        onChange={(e) => setComments(e.target.value)}
                        id="id-comments" 
                        value={comments}
                        name="comments"
                    />
                </div>
                <input type="submit" value="submit"/>                
            </form>
        </div>
    )
}

export default ControlledFormHooks
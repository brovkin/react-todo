import React from 'react';

export default props => {
    return (
        <div>
            <input onChange={(event) => props.addInputChange(event.target.value)} type="text" value={props.input}/>
            <button onClick={props.addInputClick} className="btn btn-outline-success">Add todo</button>
        </div>
    );
}

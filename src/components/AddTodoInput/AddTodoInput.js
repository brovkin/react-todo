import React from 'react';
import './AddTodoInput.css';

export default props => {
    return (
        <div className="add-block d-flex align-items-center justify-content-between">
            <input
                className="add-block__input col-8 form-control"
                onChange={(event) => props.addInputChange(event.target.value)}
                onKeyPress={(event) => props.addTodoEnterPressed(event)}
                type="text"
                value={props.input}/>
            <button className="add-block__btn col-3 btn btn-success" onClick={props.addInputClick}>Add todo</button>
        </div>
    );
}

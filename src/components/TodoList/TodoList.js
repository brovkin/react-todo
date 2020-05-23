import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

export default props => {
    console.log(props.deleteTodo);

    const todos = props.todos.map((el, index) => {
       return (
           <TodoItem
            key={index}
            index={index}
            title={el.title}
            id={el.id}
            edit={el.edit}
            deleteTodo={() => props.deleteTodo(el.id)}
            editMode={() => props.editMode(el.id)}
            changeTitle={(event) => props.changeTitle(event.target.value, index)}
            acceptEdit={() => props.acceptEdit(index)}
           />
       );
    });

    return (
        <div className="list-group">
            {todos}
        </div>
    );
}

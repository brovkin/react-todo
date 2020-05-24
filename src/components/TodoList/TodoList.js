import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import EmptyList from '../EmptyList/EmptyList';

export default props => {

    const todos = props.todos.map((el, index) => {
       return (
           <TodoItem
            key={index}
            index={index}
            title={el.title}
            id={el.id}
            edit={el.edit}
            done={el.done}
            deleteTodo={() => props.deleteTodo(el.id)}
            editMode={() => props.editMode(el.id)}
            changeTitle={(event) => props.changeTitle(event.target.value, index)}
            acceptEdit={() => props.acceptEdit(index)}
            doneItem={() => props.doneItem(el.id)}
            enterPressed={(event) => props.enterPressed(event, index)}
           />
       );
    });

    const noItems = (todos) => {

        return todos.length === 0 ? <EmptyList/> : null;

    };

    return (
        <div className="list-group">
            {todos}
            {noItems(todos)}
        </div>
    );
}

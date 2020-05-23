import React, { Component } from 'react';
import TodoTitle from '../TodoTitle/TodoTitle';
import './TodoItem.scss';

export default class TodoItem extends Component {

    render() {

        const {id, index, title, edit, done} = this.props;

        return (
            <label className="todo__item list-group-item list-group-item-action d-flex">
                <input type="checkbox" onChange={this.props.doneItem}/>
                <strong>{index + 1}.</strong>
                <TodoTitle
                    title={title}
                    edit={edit}
                    changeTitle={this.props.changeTitle}
                    done={done}
                />
                {   edit
                    ? <button className="btn btn-success fa fa-check" onClick={this.props.acceptEdit}/>
                    : <button className="btn btn-info fa fa-pencil" onClick={this.props.editMode}/>
                }
                <button className="btn btn-danger fa fa-trash" onClick={this.props.deleteTodo}/>

            </label>
        );

    }
}

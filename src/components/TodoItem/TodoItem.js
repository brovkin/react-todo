import React, { Component } from 'react';
import TodoTitle from '../TodoTitle/TodoTitle';
import './TodoItem.css';

export default class TodoItem extends Component {

    render() {

        const {id, index, title, edit, done} = this.props;

        return (
            <label className="
            todo__item list-group-item list-group-item-action d-flex align-items-center">
                <div className="todo__item-checkbox-wrapper">
                    <input className="todo__item-real-checkbox col-1" type="checkbox" onChange={this.props.doneItem}/>
                    <div className="todo__item-checkbox"/>
                </div>
                <TodoTitle
                    title={title}
                    index={index}
                    edit={edit}
                    changeTitle={this.props.changeTitle}
                    acceptEdit={this.props.acceptEdit}
                    enterPressed={this.props.enterPressed}
                    done={done}
                />
                <div className="col-4 d-flex justify-content-between">
                    {   edit
                        ? <button className="btn btn-success fa fa-check" onClick={this.props.acceptEdit}/>
                        : <button className="btn btn-info fa fa-pencil" onClick={this.props.editMode}/>
                    }
                    <button className="btn btn-danger fa fa-trash" onClick={this.props.deleteTodo}/>
                </div>
            </label>
        );

    }
}

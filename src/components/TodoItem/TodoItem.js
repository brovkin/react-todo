import React, { Component } from 'react';
import TodoTitle from '../TodoTitle/TodoTitle';

export default class TodoItem extends Component {

    render() {

        const {id, index, title, edit} = this.props;

        return (
            <div className="list-group-item d-flex">
                <strong>{index + 1}.</strong>
                <TodoTitle
                    title={title}
                    edit={edit}
                    changeTitle={this.props.changeTitle}
                />
                {   edit
                    ? <button className="btn btn-success fa fa-check" onClick={this.props.acceptEdit}/>
                    : <button className="btn btn-info fa fa-pencil" onClick={this.props.editMode}/>
                }
                <button className="btn btn-danger fa fa-trash" onClick={this.props.deleteTodo}/>

            </div>
        );

    }
}

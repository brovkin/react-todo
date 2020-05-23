import React, { Component } from 'react';
import TodoTitle from '../TodoTitle/TodoTitle';

export default class TodoItem extends Component {



    render() {

        console.log(this.props);

        const {id, index, title, edit} = this.props;

        return (
            <div className="list-group-item d-flex">
                <strong>{index + 1}.</strong>
                <TodoTitle
                    title={title}
                    edit={edit}
                    changeTitle={this.props.changeTitle}
                />
                <button onClick={this.props.deleteTodo}>Удалить</button>
                {   edit
                    ? <button onClick={this.props.acceptEdit}>Принять</button>
                    : <button onClick={this.props.editMode}>Edit</button>
                }

            </div>
        );

    }
}

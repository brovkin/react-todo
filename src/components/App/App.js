import React, { Component } from 'react';
import TodoList from "../TodoList/TodoList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

    state = {
      todos: [
            {id: 1, title: 'Купить хлеб', done: false, edit: false},
            {id: 2, title: 'Купить чай', done: false, edit: false},
            {id: 3, title: 'Купить кофе', done: false, edit: false},
      ],
    };

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(item => item.id !== id);

        this.setState((state) => {
            return {
                todos
            }
        })
    };

    editMode = (id) => {

        const todos = this.state.todos.map(el => ({
            ...el,
            edit: el.id === id
        }));

        this.setState((state) => {
            return {
                todos
            }
        })
    };

    acceptEdit = (index) => {
        const newItem = this.state.todos[index];

        newItem.edit = false;

        const todos = [...this.state.todos];

        todos[index] = newItem;

        this.setState((state) => {
            return {
                todos
            }
        })
    }

    changeTitle = (title, index) => {
        // console.log(title, index);

        const editInput = this.state.todos[index];
        editInput.title = title;

        const todos = [...this.state.todos];

        todos[index] = editInput;

        this.setState((state) => {
           return {
               todos
           }
        });

        // editInput.title = title;
    }

    render() {

        return(
            <div className="app__wrapper">
                <div className="alert alert-success">Hello world</div>
                <TodoList
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                    editMode={this.editMode}
                    changeTitle={this.changeTitle}
                    acceptEdit={this.acceptEdit}
                />
            </div>
        );
    }
}

import React, { Component } from 'react';
import TodoList from "../TodoList/TodoList";
import AddTodoInput from "../AddTodoInput/AddTodoInput";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

    state = {
      todos: [
            {id: 1, title: 'Купить хлеб', done: false, edit: false},
            {id: 2, title: 'Купить чай', done: false, edit: false},
            {id: 3, title: 'Купить кофе', done: false, edit: false},
      ],
      input: ''
    };

    componentDidMount() {
        const arr = [...this.state.todos];
        this.initialIndex = arr[arr.length - 1].id + 1;

        console.log(this.initialIndex);
    }

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

        const editInput = this.state.todos[index];
        editInput.title = title;

        const todos = [...this.state.todos];

        todos[index] = editInput;

        this.setState((state) => {
           return {
               todos
           }
        });
    };

    addInputChange = (value) => {
        console.log(value);

        this.setState({
            input: value
        });
    };

    newItem = (value) => {

        const id = this.initialIndex++;

        return {
            id,
            title: value,
            done: false,
            edit: false,
        };
    };

    addInputClick = () => {
        const todos = [...this.state.todos];

        if (this.state.input) {

            todos.push(this.newItem(this.state.input));

            console.log(todos);

            this.setState({
                todos,
                input: ''
            });

        }
    };

    render() {

        return(
            <div className="app__wrapper">
                <div className="alert alert-success">Hello world</div>
                <AddTodoInput
                    addInputChange={this.addInputChange}
                    addInputClick={this.addInputClick}
                    input={this.state.input}
                />
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

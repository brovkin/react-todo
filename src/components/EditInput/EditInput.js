import React, { Component } from 'react';
import './EditInput.css';

export default class EditInput extends Component {

    constructor(props) {
        super(props);

        this.selectAll = React.createRef();
    }

    componentDidMount() {
        this.selectAll.current.select();
    }

    render() {
        return (
                <input
                    className="edit-input form-control"
                    ref={this.selectAll}
                    type="text"
                    onChange={this.props.changeTitle}
                    onKeyPress={this.props.enterPressed}
                    value={this.props.title}/>
        );
    }


}

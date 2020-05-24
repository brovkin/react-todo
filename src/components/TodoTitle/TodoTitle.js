import React, { Component } from 'react';
import EditInput from "../EditInput/EditInput";
import './TodoTitle.css';

export default class TodoTitle extends Component {

    render() {


        const textStyle = this.props.done ? {textDecoration: 'line-through'} : null;

        const renderTitle = this.props.edit ?
            <EditInput
                changeTitle={this.props.changeTitle}
                acceptEdit={this.props.acceptEdit}
                enterPressed={this.props.enterPressed}
                title={this.props.title}/> :
            <div className="title-block__title" style={textStyle}>{this.props.title}</div>;

        return (
            <div className="col-6 title-block d-flex align-items-center" style={{margin: '0 1rem'}}>
                <strong className="title-block__index">{this.props.index + 1}.</strong>
                {renderTitle}
            </div>
        );
    }
}

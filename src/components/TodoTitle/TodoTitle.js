import React, { Component } from 'react';
import EditInput from "../EditInput/EditInput";

export default class TodoTitle extends Component {

    render() {


        const textStyle = this.props.done ? {textDecoration: 'line-through'} : null;

        const renderTitle = this.props.edit ?
            <EditInput changeTitle={this.props.changeTitle} title={this.props.title}/> :
            <div style={textStyle}>{this.props.title}</div>;

        return (
            <div style={{margin: '0 1rem'}}>
                {renderTitle}
            </div>
        );
    }
}

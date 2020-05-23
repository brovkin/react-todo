import React, { Component } from 'react';

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
            <div>
                <input
                    ref={this.selectAll}
                    type="text"
                    onChange={this.props.changeTitle}
                    value={this.props.title}/>
            </div>
        );
    }


}

import React, { Component } from 'react';
import EditInput from "../EditInput/EditInput";

export default class TodoTitle extends Component {

    render() {

        const renderTitle = this.props.edit ?
            <EditInput changeTitle={this.props.changeTitle} title={this.props.title}/> :
            <div>{this.props.title}</div>;

        return (
            <div style={{margin: '0 1rem'}}>
                {renderTitle}
            </div>
        );
    }
}

// export default props => {
//     console.log(props.edit);
//
//     return (
//         <div style={{margin: '0 1rem'}}>
//             {props.edit ? <EditInput/> : <div>{props.title}</div> }
//         </div>
//     );
// }

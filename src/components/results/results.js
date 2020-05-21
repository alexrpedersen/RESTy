import React from 'react';
import './results.scss';
const PrettyJson = require('pretty-print-json');

class Result extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
    
        } 
    }

    render() {
        return(
          <>
            <span>Total Pokemon: {this.props.count}</span>
            <PrettyJson data={this.props.headers} ></PrettyJson>
            <PrettyJson data={this.props.name} ></PrettyJson>
          </>
        )
      }
}

export default Result;
import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';


class Result extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          count: 0
        } 
    }

    render() {
      console.log('***',this.props);
        return(
          <>
          <p>Total Pokemon: </p>
          <JSONPretty id="json-pretty" data={this.props.count}></JSONPretty>
          <JSONPretty data={this.props.results}></JSONPretty>
          </>
        )
      }
}

export default Result;
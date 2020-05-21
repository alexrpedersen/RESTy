import React from 'react';
import './results.scss';
const prettyPrintJson = require('pretty-print-json');



class Result extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
    
        } 
    }

    render() {
        return(
          <>
            <h3>Total Pokemon: prettyPrintJson.toHtml({this.props.count})</h3>
          </>
        )
      }
}

export default Result;
import React from 'react';
import './form.scss';


class Form extends React.Component {
    constructor(props) {
        super(props)
    
    this.state = {
        count: 0,
        apiurl: '',
        currentMethod: 'GET',
        results: '',
        name:''
    }
}

    handleChange = e => {
        this.setState({
        apiurl: e.target.value
    })
}
      
    makeApiCall = async () => {
        const raw = await fetch(`${this.state.apiurl}`);
        const data = await raw.json();
        this.props.handleForm(
            data.count,
            data.results,
            this.state.currentMethod,
            data.headers

        )
      }
    
      logValue = (e) => {
        console.log(e.target.textContent, this.state.currentMethod);
        this.setState({ currentMethod: e.target.textContent});
        this.setState({count: e.target.textContent});
        this.props.handleForm(this.props.count, this.props.results, this.state.currentMethod);
      }
    
      render() {
        return (
            <div>
                <h1>This is RESTy</h1>
                <input onChange={this.handleChange} placeholder='ENTER API URL'></input>
                    <div className="CRUDmethods">
                        <button onClick={this.makeApiCall} id='makequery'>GET</button> 
                        <button>PUT</button>
                        <button>POST</button>
                        <button>PATCH</button>
                        <button>DELETE</button>
                    </div>
                    <p></p>
            </div>
            
        )
      }
    }


export default Form;

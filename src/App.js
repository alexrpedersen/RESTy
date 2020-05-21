import React from 'react';
import Form from './components/form/form';
import Result from './components/results/results';



class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      results: '',
      method: 'GET',
      name:'',
      headers: ''
    }
  }
    
  handleForm = (count, results, method, headers) => {
    this.setState({ count, results, method, headers })
  }

  handleResult = (count,results, name) => {
    this.setState({count,results,name})
  }
  
  render() {
    console.log('******', this.state);
        return(
          <>
          <Form handleForm={this.handleForm}
          count={this.state.count}
          results={this.state.results}
          name={this.state.name}/>
          <Result  handleResult={this.state.handleResult} 
          count={this.state.count} 
          headers={this.state.headers}
          name={this.state.name}
          results={this.state.results}/>
          </>
        )
    }
}

export default App;
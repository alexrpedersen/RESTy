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
    
  handleForm = (count, results, method) => {
    this.setState({ count, results, method })
  }

  handleResult = (count,name) => {
    this.setState({count,name})
  }
  
  render() {
        return(
          <>
          <Form handleForm={this.handleForm}
          count={this.state.count}
          results={this.state.results}
          name={this.state.name}/>
          <Result  handleResult={this.state.handleResult} 
          count={this.state.count} 
          headers={this.state.headers}
          name={this.state.name}/>
          </>
        )
    }
}

export default App;
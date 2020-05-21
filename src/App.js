import React from 'react';
import Form from './components/form/form';
// import './app.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      results: '',
      method: 'GET',
      name:''
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
          method={this.state.method}
          count={this.state.count}
          results={this.state.results}
          name={this.state.name}/>
          </>
        )
    }
}

export default App;
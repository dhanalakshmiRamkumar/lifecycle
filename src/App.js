
import React from 'react';
import CounterComponent from './CounterComponent';


class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      render : true
    }
  }
  
  render(){

    return(
      <div style={{padding: '15px'}}>
        <h3 className="Padded">this is {this.props.componentName}</h3>
        <button onClick={() => this.setState({ render : !this.state.render })}> Mount/Unmount Counter</button>
        {this.state.render ? 
        <CounterComponent componentName={"Class Component"} intialValue={"10"} /> 
        : <></> }
      
      </div>
    );

  }
    
  
}
export default App;

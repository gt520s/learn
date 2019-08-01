import React,{Component} from 'react';
import './App.css';import Header from './pages/header'

class App extends Component{
  constructor(){
    super()
    this.state = {
      name:'guan',
      age:56
    }
  }
  render() {
    let {age,name} = this.state
    return (
      <div>
        这是app组件.
        <hr/>
        <Header name={name} age={age}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Header>
      </div>
    );
  }


}

export default App;

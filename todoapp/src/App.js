import React , { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
  return (
    <div className="App">
      My Hello World
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}
}


//Class Component
class FirstComponent extends Component {
  render () {
  return (
    <div className="firstComponent">
      FirstComponent
    </div>
  );
}
}

//Class Component
class SecondComponent extends Component {
  render () {
  return (
    <div className="secondComponent">
      SecondComponent
    </div>
  );
}
}

//Class Component
class ThirdComponent extends Component {
  render () {
  return (
    <div className="thirdComponent">
      ThirdComponent
    </div>
  );
}
}

export default App;

import React , { Component} from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
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






//Function Component
function ThirdComponent() {
    return (
      <div className="thirdComponent">
        ThirdComponent
      </div>
  );
}



export default App;

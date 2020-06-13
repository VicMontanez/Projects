import React , { Component} from 'react';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import MusicApp from './components/MusicApp/MusicApp';
import './bootstrap.css';

class App extends Component {
  render () {
  return (
    <div className="App">
    {/* <TodoApp/> */}
    <MusicApp/>
    </div>
  );
}
}


export default App;

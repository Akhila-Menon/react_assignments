import './App.css';
import FuntionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent /><hr/>
      <FuntionalComponent firstName="Anjana" lastName="Rajan"/>
    </div>
  );
}

export default App;

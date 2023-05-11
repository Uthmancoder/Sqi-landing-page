import Sqinav from './components/NavBar';
import Study from './components/Study';
import Glance from './components/Glance';
import Alumni from './components/Alumni';
import Making from './components/Making';
import './App.css';


function App() {
  return (
    <div className="App">
         <Sqinav/>
         <Study/>
         <Glance/>
         <Alumni/>
         <Making/>
    </div>
  );
}

export default App;

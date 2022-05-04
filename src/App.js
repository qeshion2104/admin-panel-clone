import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className="App__Glass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;

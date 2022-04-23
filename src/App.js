import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';

function App() {
  return (
    <div className="App">
      <div className="App__Glass">
        <Sidebar/>
        <MainDash/>
        <div>asd</div>
      </div>
    </div>
  );
}

export default App;

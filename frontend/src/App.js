import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AddImageForm from './Components/AddImageForm/AddImage';
import Suggestions from './Components/Suggestions/Suggestions';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <AddImageForm/>
     <Suggestions/>
    </div>
  );
}

export default App;

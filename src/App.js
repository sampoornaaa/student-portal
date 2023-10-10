
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent';
import Favorite from './Components/Favorite';
import Home from './Components/Home';
import Editstudent from './Components/Editstudent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddStudent/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/edit/:id" element={<Editstudent/>}/>
      </Routes>
    </div>
  );
}

export default App;

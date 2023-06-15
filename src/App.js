import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Edit from './components/Edit';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='read' element={<Read/>}/>
        <Route path='edit' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

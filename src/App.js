import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import Detail from './pages/Details'
import './App.css'
// import KakaoLogin from './pages/Kakaologin'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<Main/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/details' element={<Detail/>}></Route>
      </Routes>    
    </div>
  );
}

export default App;

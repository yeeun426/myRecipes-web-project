import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import Detail from './pages/Details'
import './App.css'
import KakaoLogin from './pages/Kakaologin'
import UserInfo from './components/UserInfo'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<Main/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/details' element={<Detail/>}></Route>
        <Route path="/kakaologin" element={<KakaoLogin/>} />
        <Route path="/userinfo" element={<UserInfo/>} />
      </Routes>    
    </div>
  );
}

export default App;

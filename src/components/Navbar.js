import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';

function Navbar() {
  const onLogout = () => {
    // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
      sessionStorage.removeItem('nick_names')
      // App 으로 이동(새로고침)
      document.location.href = '/'
  }
  return (
    <nav className="navbar">
      <div className="navbar_upper">
        <Link to ='/home'>
            <div className="navbar_logo">
                <img src={logo} alt = "logo" style={{height: "50px"}}/>
                <div>myRecipes</div>
            </div>
        </Link>

        <div className="navbar_my">
          <li><Link to ='/Request'>CONSULTATION</Link></li>
          <li id="cart"><Link to='/mypage'>CART</Link></li>
          <li><Link to='/login'>LOGIN</Link></li>
          
        </div>
      </div>
          
      {/* <div className="navbar_menu">
        <li><Link to ="/">Search</Link></li>
        <li><Link to ="/course">Course</Link></li>
        <li><Link to ="/recommend">Recommend</Link></li>
        <li><Link to ="/community">Community</Link></li>
        <li><Link to="/mypage">Mypage</Link></li>
      </div> */}
    </nav>
    );
};

export default Navbar;
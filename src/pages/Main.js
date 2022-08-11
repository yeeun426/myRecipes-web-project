import React from "react";
import styles from './Main.module.css';
import {KAKAO_AUTH_URL} from '../components/OAuth';
import {Link} from 'react-router-dom'

function Main() {
    
    return(
        <div className={styles.Main}>
            <div className={styles.login_title}>
                LOGIN
            </div>

            <div className={styles.welcom}>
                WELCOM BACK
            </div>

            <div className={styles.login_info}>
                <input placeholder="아이디"/>
            </div>

            <div className={styles.login_info}>
                <input placeholder="비밀번호"/>
            </div>

            <Link to = '/home'>
            <button className = {styles.loginbtn}>
                로그인
            </button>
            </Link>

            <a href={KAKAO_AUTH_URL}>
                <img src="http://www.2bc.co.kr/_wg/img/btn_login_kakao.gif" alt="카카오톡 로그인"/>            
            </a>
        </div>
        
    )
}

export default Main;

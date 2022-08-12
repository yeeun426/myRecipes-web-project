import React, { useEffect, useState } from "react";

import styles from '../pages/Home.module.css';

import {nameState} from '../recoil/UserLogin';
import { useRecoilValue } from "recoil";

const UserInfo = () => {
  const name = useRecoilValue(nameState);

  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();

  const [kakaoLogin, setkakaoLogin] = useState(false);
  const getProfile = async (props) => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      // let data = await window.Kakao.API.request({
      //   url: "/v2/user/me",
      // });
      // // 사용자 정보 변수에 저장
      // setUserId(data.id);
      // setNickName(data.properties.nickname);
      // setProfileImage(data.properties.profile_image);
      window.Kakao.Auth.loginForm({
        success: function(response) {
          console.log(response)
          window.Kakao.API.request({
            url:'/v2/user/me',
            success:(res) => {
                console.log(res);
                setNickName(res.properties.nickname)
                setProfileImage(res.properties.profile_image)
            },
            fail: function(error) {
              console.log(error);
            }
      });
    }, fail: (error) => {
      console.log(error);
      }
    })
  }catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getProfile();
  }, []);


  return (
    <div className={styles.UserInfo}>
      {/* <h2>{user_id}</h2> */}
      <img src={profileImage} alt=""></img>
      {name === ""
      ?<div className={styles.user_info}>{nickName}님</div>
      :<div className={styles.user_info}>{name}님</div>
      }
      <div className={styles.user_info}>오늘은 어떤 요리를 할까요?</div>
    </div>
  );
};

export default UserInfo;
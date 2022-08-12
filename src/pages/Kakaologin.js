import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { CLIENT_SECRET, REST_API_KEY, REDIRECT_URI, KAKAO_AUTH_URL} from '../components/OAuth';
import axios from "axios";
import qs from "qs";

function KakaoLogin() {
    let params = new URL(window.location.href).searchParams;
    const KAKAO_CODE = params.get("code");

    const navigate = useNavigate();
    
    const getToken = async () => {
        const payload = qs.stringify({
          grant_type: "authorization_code",
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code: KAKAO_CODE,
          client_secret: CLIENT_SECRET,
        });

        try {
            //access token 가져오기
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload
            );   
            // Kakao Javascript SDK 초기화
            window.Kakao.init(CLIENT_SECRET);
            // access token 설정
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            navigate("/home");
            } catch (err) {
            console.log(err);
            }   
        };

        useEffect(() => {
            getToken();
          }, []);

    return null;
    };

export default KakaoLogin;
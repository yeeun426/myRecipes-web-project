import React, {useState, useEffect} from 'react';
import styles from './Home.module.css'
import styled from 'styled-components'
import axios from 'axios';
import Navbar from '../components/Navbar'

import fork from '../imgs/fork.png'

import SwiperCore,{ Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"; //basic
import "swiper/css/navigation";

import {useNavigate} from 'react-router-dom';

SwiperCore.use([Navigation]);

function Home() {
    const API_key = "cf018bbda8734738a70b"
    const url = `https://openapi.foodsafetykorea.go.kr/api/${API_key}/COOKRCP01/json/1/100`;
    
    const [food, setFood] = useState([]);
    //api 검색 키워드(쿼리 스트링)
    const [query, setQeury] = useState('');
    
    useEffect(() => {
    const SearchFood = async(e) => {
        try {
            const data = await axios({
            method:'get', //정보 조회
            url: url
            })

            console.log('처음')
            console.log(data.data.COOKRCP01.row)

            for (let i = 0; i < data.data.COOKRCP01.row.length; i++) {
                if(data.data.COOKRCP01.row[i].RCP_SEQ != null) {
                    setFood(prev => {return[...prev, data.data.COOKRCP01.row[i]]})
                }else{
                    alert('error');
                }
            }


            }catch(err) {
                console.log(err);
            }
            console.log('다음')
            console.log(food)
        }
        SearchFood();
    }, [])

    // useEffect(() => {
    // }, [food])
    const navigate = useNavigate();

    const onClickFood = (e) => {
        navigate('/details', {state : e.currentTarget.id})
    }

    return(
        <div>
            <Navbar />

            {Object.keys(food).length !== 0 &&
            <ContainerWrapper>
                {/* <input value={query} onChange={e => setQeury(e.target.value)} /> */}
                {food.map((food) => (
                <div KEY={food.RCP_SEQ} id={food.RCP_SEQ} className='food_container' onClick={onClickFood}>
                    <img src={food.ATT_FILE_NO_MAIN} alt="" />
                    <div className="food_info"> 
                        <div className="food_name">{food.RCP_NM}</div>

                        <Swiper
                            className={styles.main_detail}
                            slidesPerView={1}
                            navigation
                        >
                            <SwiperSlide>
                                <div>
                                    <div className={styles.img_title}>
                                        <img src={fork} alt="fork" />
                                        <div className={styles.fc_subtitle}>재료</div>
                                    </div>

                                    <div className={styles.rcp_ingredients}>{food.RCP_PARTS_DTLS}</div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <div className={styles.img_title}>
                                        <img src={fork} alt="fork" />
                                        <div className={styles.fc_subtitle}>영양성분</div>
                                    </div>

                                    <div>열량 : {food.INFO_ENG}</div>
                                    <div>탄수화물 : {food.INFO_CAR}</div>
                                    <div>단백질 : {food.INFO_PRO}</div>
                                    <div>지방 : {food.INFO_FAT}</div>
                                    <div>나트륨 : {food.INFO_NA}</div>
                                </div>
                            </SwiperSlide>
                        </Swiper> 
                    </div>
                </div>
                ))}
            </ContainerWrapper>
            }
        </div>
    )
}

export default Home;

const ContainerWrapper = styled.div `
    padding: 30px 50px;
    word-break: keep-all;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;

    .food_container{
    width: 265px;
    font-size: 14px;
    box-shadow: 3px 3px 3px gray;
    line-height: 1.4;

    }
    
    .food_info{
        padding: 15px;
        width: 265px;
        height: 265px;
        box-sizing: border-box;
    }

    img {
        width: 265px;
    }
    .food_name{
        font-size: 15px;
        font-weight: bold;
        color: green;
    }
`;

// const HomeWrap = styled.div `
//     width: 100vw;
//     height: 100%;
    
//     .homeContentWrap {
//         border: 1px solid blue;
//         width: 300px;
//         padding: 20px;
//     }
//     `;

// const ResultWrap = styled.div`
//     margin-top: 60px;
//     padding: 10px;
//     border: 1px solid black;
//     border-radius: 8px;
// `;
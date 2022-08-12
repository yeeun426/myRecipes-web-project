import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './Details.module.css';

import styled from 'styled-components'

function Details() {
    const API_key = "cf018bbda8734738a70b"
    const url = `https://openapi.foodsafetykorea.go.kr/api/${API_key}/COOKRCP01/json/1/100`;
    
    const location = useLocation();
    console.log(location.state);
    
    const [food, setFood] = useState([]);

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
                        if(data.data.COOKRCP01.row[i].RCP_SEQ === location.state)
                            setFood(data.data.COOKRCP01.row[i])
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
    

    return(
        <div>
            <Navbar />
            

            <div>
            {Object.keys(food).length !== 0 &&
            <DetailWrapper>
                <div className={styles.img_cotainer}>
                    <img className={styles.main_img} src={food.ATT_FILE_NO_MAIN} alt="" />
                    <div className={styles.img_right_info}>
                        <div className="name_container">
                            <div className="name">{food.RCP_NM}</div>

                            <div className={styles.sub_info}>{food.RCP_PAT2}</div>
                            <div className={styles.sub_info}>{food.RCP_WAY2}</div>
                        </div>

                        <div style={{paddingBottom: '20px'}}>
                            <div className="fc_subtitle">영양성분</div>
                            <div>열량 : {food.INFO_ENG}</div>
                            <div>탄수화물 : {food.INFO_CAR}</div>
                            <div>단백질 : {food.INFO_PRO}</div>
                            <div>지방 : {food.INFO_FAT}</div>
                            <div>나트륨 : {food.INFO_NA}</div>
                        </div>

                        <div>
                            <div className="fc_subtitle">재료</div>
                            <div>{food.RCP_PARTS_DTLS}</div>
                        </div>
                    </div>
                </div>

                    <div className="food_info"> 
                        <div className="fc_subtitle">레시피</div>    

                        <div className={styles.rcp_step}>                   
                            <img src={food.MANUAL_IMG01} alt=""  style={{marginTop:0}}/>
                            <div className={styles.manual}>{food.MANUAL01}</div>
                        </div>     

                        
                        <div className={styles.rcp_step}>                   
                            <img src={food.MANUAL_IMG02} alt="" />
                            <div className={styles.manual}>{food.MANUAL02}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG03} alt="" />
                            <div className={styles.manual}>{food.MANUAL03}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG04} alt="" />
                            <div className={styles.manual}>{food.MANUAL04}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG05} alt="" />
                            <div className={styles.manual}>{food.MANUAL05}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG06} alt="" />
                            <div className={styles.manual}>{food.MANUAL06}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG07} alt="" />
                            <div className={styles.manual}>{food.MANUAL07}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG08} alt="" />
                            <div className={styles.manual}>{food.MANUAL08}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG09} alt="" />
                            <div className={styles.manual}>{food.MANUAL09}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG10} alt="" />
                            <div className={styles.manual}>{food.MANUAL10}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG11} alt="" />
                            <div className={styles.manual}>{food.MANUAL11}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG12} alt="" />
                            <div className={styles.manual}>{food.MANUAL12}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG13} alt="" />
                            <div className={styles.manual}>{food.MANUAL13}</div>
                        </div>
                        
                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG14} alt="" />
                            <div className={styles.manual}>{food.MANUAL14}</div>
                        </div>

                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG15} alt="" />
                            <div className={styles.manual}>{food.MANUAL15}</div>
                        </div>

                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG16} alt="" />
                            <div className={styles.manual}>{food.MANUAL16}</div>
                        </div>

                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG17} alt="" />
                            <div className={styles.manual}>{food.MANUAL17}</div>
                        </div>

                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG18} alt="" />
                            <div className={styles.manual}>{food.MANUAL18}</div>
                        </div>


                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG19} alt="" />
                            <div className={styles.manual}>{food.MANUAL19}</div>
                        </div>

                        <div className={styles.rcp_step}>    
                            <img src={food.MANUAL_IMG20} alt="" />
                            <div className={styles.manual}>{food.MANUAL20}</div>
                        </div>
                    </div>
            </DetailWrapper>
            }
            </div>
        </div>
    )
}

export default Details;

const DetailWrapper = styled.div `
    padding: 40px 220px;

    .name_container {
        padding-bottom: 20px;
        font-family:"EF_Diary";
    }

    .name{
    font-size: 26px;
    font-weight: 600;
    }

    .fc_subtitle{
        font-weight: 600;
        font-size: 20px;
        font-family:"EF_Diary";
        color: black;
        margin-bottom: 5px;
    }

    .food_info{
        padding: 30px;
        text-align: -webkit-center;
    }
    `;
import React, {useState, useEffect} from 'react';
import styles from './Home.module.css'
import styled from 'styled-components'
import axios from 'axios';
import Navbar from '../components/Navbar'
function Home() {
    const API_key = "cf018bbda8734738a70b"
    const url = `https://openapi.foodsafetykorea.go.kr/api/${API_key}/COOKRCP01/json/1/500`;
    
    const [food, setFood] = useState([]);


    useEffect(() => {
    const SearchFood = async(e) => {
        try {
            const data = await axios({
            method:'get', //정보 조회
            url: url

            })
            console.log(data.data.COOKRCP01)

            for (let i = 0; i < data.data.COOKRCP01.row.length; i++) {
                if(data.data.COOKRCP01.row[i].RCP_SEQ != null) {
                    setFood(prev => {return[...prev, data.data.COOKRCP01.row[i]]})
                }else{
                    alert('error');
                }
            }
                //     setFood(data.data.COOKRCP01.row[i]);
            //     console.log(data.data.COOKRCP01.row[i]);
            // }

            }catch(err) {
                console.log(err);
            }
            console.log('다음')
            console.log(food)
        }
        SearchFood();
    },[])

    useEffect(() => {
    }, [food])


    const onClickFood = () => {
        console.log('클릭하심')

    }
    
    return(
        <div>
            <Navbar />

            {food.length > 0 &&
            <ContainerWrapper>
                {food.map((food, RCP_SEQ) => {
                <div KEY={RCP_SEQ} className='food_container' onClick={onClickFood}>
                    <img src={food.ATT_FILE_NO_MAIN} alt=""/>
                    <div className="food_info">
                        <div className="food_name">{food.RCP_NM}</div>
                        {/* <div>조리방법 : {food.RCP_WAY2}</div> */}
                        <div>재료</div>
                        <div>{food.RCP_PARTS_DTLS}</div>
                        <div>열량 : {food.INFO_ENG}</div>
                        <div>탄수화물 : {food.INFO_CAR}</div>
                        <div>단백질 : {food.INFO_PRO}</div>
                        <div>지방 : {food.INFO_FAT}</div>
                        <div>나트륨 : {food.INFO_NA}</div>
                        <div>{food.Hash_Tag}</div>
                    </div>
                </div>
                })}
            </ContainerWrapper>
            }
        </div>
    )
}

export default Home;

const ContainerWrapper = styled.div `
    padding: 30px 50px;
    word-break: keep-all;

    .food_container{
    width: 300px;
    font-size: 13px;
    box-shadow: 3px 3px 3px gray;
    }
    
    .food_info{
        padding:15px;
    }

    img {
        width: 300px;
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
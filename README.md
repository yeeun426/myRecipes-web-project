# myRecipes
--------------
## Project Purpose
> 본 프로젝트는 open API를 활용하여 해당 데이터를 가지고 웹 서비스를 제작하였다.<br/>
> 원하는 음식을 검색할 수 있고 그 음식의 재료, 칼로리, 레시피를 확인할 수 있는 프로젝트이다. <br/>
> <br/>제작기간은 2022-08-11 ~ 2022-08-16로 1주이다.
--------------
## Project Idea
> 평소 다이어트를 자주 하는 편인데 그럴 때 항상 칼로리를 확인하곤 했다. 이러한 경험을 바탕으로 궁금한 음식을 검색하여 음식의 영양성분과 재료를 확인하고 칼로리가 적합하다 느꼈다면 상세페이지에서 레시피를 확인 할 수 있도록 하였다.
--------------
## Learn
> [OPEN API 활용]
> - 다양하고 재미있는 데이터들이 많이 있는 [공공데이터포털](https://www.data.go.kr/)에서 데이터를 사용하여 레시피를 검색할 수 있는 서비스를 제공하고자 했다.
> - 기존에는 실제 api없이 더미 데이터를 사용하여 통신하는 것처럼 코드를 작성했지만 이번에는 OPEN API를 사용하여 네트워크 통신을 하도록 했다.
> - 이 과정에서 api를 바로 호출하기보다는 postman이라는 서버통신 툴을 사용하여 API가 정상작동하는지 먼저 확인하고 실제 프로젝트에 적용하였다.
>
> [OPEN API CORS 오류]
> - 공공데이터포털에 API를 호출하다보니 흔히 보던 CORS 오류가 발생하였다. 다양한 해결방법이 있지만, 가장 간단한 방법으로 [https://secret-ocean-49799.herokuapp.com](https://secret-ocean-49799.herokuapp.com/) 이 주소를 요청할 url 앞에다가 붙여주어 수월하게 해결할 수 있었다
> - ex) [https://secret-ocean-49799.herokuapp.com/](https://secret-ocean-49799.herokuapp.com/요청할)요청할 원래 url
>
> [로딩 스피너]
> - 로딩 스피너는 주로 네트워크 요청, 데이터 로딩, 페이지 전환 등의 작업이 이뤄지는 동안 부드럽게 회전하면서 화면에 표시 된다.
> - api가 로딩이 되는 중이라면 setFood함수가 빈 배열을 가지고 있을 것이다. 이를 이용하여 food가 빈 배열이라면 loading이 true로 바뀌게하여 스피너를 실행하게 하였다.
> ```javascript
> if(search === null || search === '') {
>    setLoading(true);
>    setFood([]);
>    for (let i = 0; i < data.data.COOKRCP01.row.length; i++) {
>      if(data.data.COOKRCP01.row[i].RCP_SEQ != null) {
>          setFood(prev => {return[...prev, data.data.COOKRCP01.row[i]]})
>          setLoading(false);
>      }else{
>          alert('error');
>      }
>    }
> }
> ``` 
>   
> [검색 기능]
> - 처음 음식리스트가 메인화면에 뜨게 되는데 이 때 원하는 음식을 검색하면 검색한 단어가 포함된 모든 음식들이 검색이 되는 기능이다.
> - 구현한 방법은 food 배열에서 filter 메서드를 호출하도록 했다. 즉, 음식의 이름('RCP_NM')속성에 검색한 단어('search')문자열이 포함되어있는지 includes 메서드를 사용하여 특정 문자열이 포함되어있는지 확인하게 된다.
> - food.filter((row) => row.RCP_NM.includes(search))
>
> [kakao 소셜 로그인]
> - 카카오톡 로그인을 통해 로그인한 유저의 카카오톡 이름, 이메일을 가져올 수 있도록 하였다.
> - 백엔드가 없었기 때문에 프론트단에서만 실행될 수 있도록 작업하였다.
> - 카카오 로그인 버튼을 누르면 kakao 인가 요청이 생성된다. 이 요청은 사용자를 카카오 인증 서버로 리디렉션하게된다.
> - 카카오 인증서버는 인증 코드를 생성하고, 웹으로 리디렉션하게된다. 웹은 카카오에서 전달된 인증 코드를 받아 카카오 인증 서버에 엑세스 토큰을 요청한다.
> -  요청에는 클라이언트 아이디, 비밀 키, 리디렉션 url이 포함된다. 엑세스 토큰을 획득하게 되면 이를 이용해 사용자 정보를 요청하고 사용할 수 있게 되는 원리를 이용하였다.
--------------
## Pages
> [로그인]
<img src="https://user-images.githubusercontent.com/88296511/217318385-50afc84f-b83e-4cba-904f-f4feef10e1e8.png">

> [메인페이지
]<img src="https://user-images.githubusercontent.com/88296511/217318532-9769df20-0dd5-48eb-9daf-190ee4fc8395.png">
<img src="https://user-images.githubusercontent.com/88296511/217320139-aca19af5-8b73-45fa-9268-bd27be278b9c.png">

> [상세페이지]
<img src="https://user-images.githubusercontent.com/88296511/217318630-d2b813d8-ea20-452e-b43b-0200955b9046.png">
<img src="https://user-images.githubusercontent.com/88296511/217318842-43cf7b36-6acb-4ec2-b666-25d0a6709f65.png">

-------------
## Current Folder Structure
> #### 🗂 *src/components*
> > ⌙공통 컴포넌트들을 포함하고있다.
> #### 🗂 *src/font*
> > ⌙구현에 필요한 폰트들을 포함하고 있다.
> #### 🗂 *src/img*
> > ⌙구현에 필요한 이미지 파일들을 포함하고 있다.
> #### 🗂 *src/pages*
> > ⌙웹 상의 모든 페이지들이 있다.
> #### 🗂 *src/recoil*
> > ⌙리코일을 사용하는 컴포넌트들을 포함하고 있다.
-------------
## Project Preview
> 시현 영상 <br>
> https://drive.google.com/drive/folders/1kATYaHrN2w6lUqXJmRHM9gPEAcTMpnVN
-------------
## Project Environment
> > <img src = "https://user-images.githubusercontent.com/88296511/217285156-6deaeb5d-38cf-4311-a529-cb6534d53c7f.png" width="250" height="150">
>
-------------
## Organizer
> 라이징캠프
-------------
## Project Role
> **frontend** : yeeun426
>
-------------
## Source
> open API 속 제공된 이미지 사용
>
-------------
## open API
> 식품의약품안전처 '조리식품의 레시피DB'

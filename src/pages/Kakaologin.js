import React from 'react';

function KakaoLogin() {
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");
    
    return(
        <div className="KakaoLogin">

        </div>
        
    )
}

export default KakaoLogin;
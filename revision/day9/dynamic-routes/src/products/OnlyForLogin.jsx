import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function OnlyForLogin() {
    const [islogined, setIslogined] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!islogined){
            navigate('/login');
        }
    },[islogined, navigate])
  return (
    <div>
        {islogined?(<p>wow you r logined</p>):null}
    </div>
  )
}

export default OnlyForLogin
import { useEffect, useState } from "react";



const getRandomCookie = () =>{
    const cookieLen = 15;
    const randomNum = Math.floor(Math.random() * cookieLen);
    
    console.log('randomNum', randomNum);
};

export const useCookie = () =>{
    const [cookie,setCookie] = useState("");
    

    useEffect(()=>{
        const randomCookie = getRandomCookie();
        // setCookie(randomCookie);
    },[]);

    return{
        
    };
};
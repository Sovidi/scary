import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';

export const myContext = createContext();

const insert = (state, action) => {
    switch(action.type) {
        case "space" : return action.d;
        // case "search" : return action.d;
        case "comment" : return action.d;
        case "commentGet" : return action.d;
        default : console.log("최종데이터 없음");
    }
}

function Context({children}) {
    const [data, dispatch] = useReducer(insert, []);

    function getRandomNumber1() {
        return Math.floor(Math.random() * 3) + 1;
    }
    const randomNum1 = getRandomNumber1();
    
    function getRandomNumber2() {
        return Math.floor(Math.random() * 3) + 1;
    }
    const randomNum2 = getRandomNumber2();
    
    function getRandomNumber3() {
        return Math.floor(Math.random() * 3) + 1;
    }
    const randomNum3 = getRandomNumber3();


    function getRandomDate() {
        const startYear = 2010;
        const endYear = 2020;
        const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
        const month = (Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0');
        const daysInMonth = new Date(year, month, 0).getDate();
        const day = (Math.floor(Math.random() * daysInMonth) + 1).toString().padStart(2, '0');
    
        const date = `${year}-${month}-${day}`;
        return date;
    }    
    const randomDate = getRandomDate();

    const server = axios.create({
        baseURL:"https://port-0-scary-server-6w1j2alm48bfok.sel5.cloudtype.app"
    })

    const space = axios.create({
        baseURL:"https://api.nasa.gov/planetary/apod",
        params: {
            api_key: "yq2fKjbfLH7bFiRl80TMckGQxLFsQUhpleuxOUCD",
            date : `${randomDate}`
        }
    })

    // const searchTest = axios.create({
    //     baseURL:"https://cse.google.com/cse.js",
    //     params: {
    //         api_key:"AIzaSyBwsbJu8-7pvUtXs03dfYmwO4nZDPiLTJA",
    //         cx: "53ed9f2feaec14c77"
    //     }
    // })

    // if(!data) return <>로딩중</>
    const fetchFn = async (type, data) => {
        let res;
        switch (type) {
            case "space" :
                res = await space.get("/");
                break;
            case "commentGet" :
                res = await server.get("/abc");
                break;
            case "comment" :
                res = await server.post("/insert", data);
                break;
            // case "search" : 
            //     res = await searchTest.get(`/`, {params: {q: data}});
            //     break;
            default : console.log("데이터 없음");
        }
        dispatch({type, d: res.data});
        console.log(res.data);
    }

    useEffect(()=>{
        // fetchFn("commentGet", "");
    }, []);

    return (
        <myContext.Provider value={{data, fetchFn, randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3}}>
            {children}
        </myContext.Provider>
    )
}

export default Context
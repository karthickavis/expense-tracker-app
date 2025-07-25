import { useEffect } from "react";

const useLocalStorage=(key,data)=>{
    useEffect(()=>{
       localStorage.setItem(key,JSON.stringify(data));
    },[data,key])

}
export default useLocalStorage
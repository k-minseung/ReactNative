//특정 API에 GET요청을 보내고 응답을 받아보장
import { useState , useEffect } from "react";
//커스텀 훅 기존의 훅을 잘 조합해서 사용

// ↓ useFetch 훅을 호출할 때 url을 전달받겠다.
export const useFetch = url => {
    const [data, setData] = useState(null); // url에 비동기 통신 요청(default get방식)
    const [error, setError] = useState(null); // fetch를 통해 얻어온 데이터는 json형식으로 변환해야함
    const [ inProgress, setInProgress] = useState(false);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                setInProgress(true);
                const res = await fetch(url);
                const result = await res.json();
                if (res.ok){
                    setData(result);
                    setError(null);
                } else {
                    throw result;
                }
            } catch (error) {
                setError(error);
            } finally {
                setInProgress(false)
            }
        }// fetchData
        fetchData();   //fetchData() 호출하기   
    },[]);
    return {data, error, inProgress};
}





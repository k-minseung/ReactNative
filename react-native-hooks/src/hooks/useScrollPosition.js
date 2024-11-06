import { useState, useEffect } from "react";

export const useScrollPosition = () => {
    //스크롤 위치를 저장하는 State
    const [scrollPosition,setScrollPosition] = useState(0);


    //스크롤 위치를 얻어와서 state 저장할 함수
    const handleScroll = (event) => {
        setScrollPosition(event.nativeEvent.contentOffset.y);

    }

    //스크롤 위치와 함수를 반환
    return {scrollPosition, handleScroll};
}
//정규식
//올바른 이메일 형식인지 확인하는 함수
export const validateEmail = email =>{
    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    /*
        /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9A-z]+\.[A-z]{2}.?[A-z]{0,3}$/

        - /^[0-9?A-z0-9?] : 시작부분에서 숫자 (0-9), 대문자와 소문자 (A-z),숫자(0-9) 및 ? 문자중 하나 이상을 포함하겠다.
        - (\.)? : 앞에온 문자열 뒤에 선택적으로 . 문자가 올 수 있도록 설정
        - @[0-9A-z] : @ 다음에는 숫자와 알파벳 ? 가 하나 이상이 오는 형태
        - \.[A-z]{2} : 마지막에 오는 . 과 그 뒤에 알파벳 두개 까지만 허용
        - .?[A-z]{0,3} : 최종 도메인 부분에 . 이 선택적으로 올 수 있고 , 그 뒤에 최대 세개의 알파벳이 올 수 있다.



    */
    return regex.test(email); // 정규식 조건이 맞으면 true 아니면 false 를 반환
}

export const removeWhitespace = text =>{
    const regex = /\s/g; //공백을 찾음
    // /g를 안쓰면 최초의 공백만 찾고 멈춤
    // 문자열의 모든 공백을 찾으려면 /g까지 써줘야함
    // /g : 정규 표현식이 문자열에서 모든 일치 항목을 찾도록 설정
    
    return text.replace(regex,'');
}






//문자열에서 공백을 모두 제거하는 함수
import {initializeApp} from 'firebase/app'
import { getAuth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        updateProfile,
        signOut
        } from 'firebase/auth';
import config from '../../firebase.json'
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { uploadBytes } from 'firebase/storage';
import { collection, getFirestore, doc, setDoc } from 'firebase/firestore';


//initializeApp()메서드
//firebase는 전달된 설정을 기반으로 객체를 생성한다.
//이후 app을 통해서 firebase의 인증, 데이터베이스, 스토리지등의 서비스를 이용할 것이다.
const app = initializeApp(config);

const auth = getAuth(app);

const uploadImage = async uri => {
    //만약 uri가 이미 https로 시작하는 웹 uri면 업로드하지않고 그대로 반환
    if(uri.startsWith('https')){
        return URL;
    }


//로컬 파일 uri인 경우, fetch를 통해 이미지 데이터를 불러오고 blob형태로 변환
const response = await fetch(uri);
const blob = await response.blob();

//현재 로그인된 사용자의 id(uid)를 가져온다.
const {uid} = auth.currentUser;

//Firebase의 Storage인스턴스를 가져오고 저장할 파일의 참조를 생성
const storage = getStorage(app);
const storageRef = ref(storage, `/profile/${uid}/photo.png`);

//지정한 참조에서 blob데이터를 image/png 형식으로 업로드
await uploadBytes(storageRef, blob,{
    contentType:'image/png',
})
//업로드된 파일의 다운로드 URL을 가져와 반환
return await getDownloadURL(storageRef)

}



//signInWithEmailAndPassword
//이메일과 비밀번호를 이용해 인증받는 함수
export const login = async({email, password}) => {
    const {user} = await signInWithEmailAndPassword(auth,email, password);

    return user;
}

//회원가입 함수
export const signup = async({name,email,password,photoUrl})=>{
    //이메일과 비밀번호로 사용자 추가
    const {user} = await createUserWithEmailAndPassword(auth,email,password);
    //주어진 photoUrl에서 Url을 반환하여 저장 
    const PhotoUrl = await uploadImage(photoUrl)

    //반환하여 저장한 것을 Firebase의 스토리지에 업로드
    await updateProfile(auth.currentUser,{displayName: name,photoURL: PhotoUrl})
    
    return user;
}


// 로그아웃 함수
export const logout = async () => {
    await signOut(auth);
    return{};
}


//현재 로그인한 유저의 정보를 불러오는 함수
export const getCurrentUser = () => {
    const{uid,displayName,email,photoURL} = auth.currentUser;
    return {uid,displayName,email,photoURL};
}

//다른 사진을 업로드할 수 있게 수정해주는 함수
//auth.currentUser => 현재 로그인한 User의 정보
export const updateUserInfo = async photo =>{
    const photoUrl = await uploadImage(photo);
    await updateProfile(auth.currentUser,{photoUrl})
    return photoUrl;
}

export const db = getFirestore(app);

//채널을 생성하는 함수
//매개변수로 제목과 설명을 얻어온다.
export const createChannel = async ({ title, description }) => {

    //fireStore 데이터베이스에서 'channels'컬렉션에 접근
    //db : firestore의 객체를 가리킨다.
    //channels이라는 컬렉션에 접근
    const channelCollection = collection(db, 'channels');
    
    //channels 컬렉션에 새로운 문서를 추가하기 위한 레퍼런스를 생성
    const newChannelRef = doc(channelCollection);
    const id = newChannelRef.id;

    //id : fireStore에서 자동 생성된 ID
    //title : 넘어온 채널의 제목
    //description : 채널의 설명
    //createdAt : 현재 시간의 타임스탬프
    const newChannel = {
        id,
        title,
        description,
        createdAt: Date.now(),
    };
    //새로 생성된 문서에 newChannel데이터를 fireStore에 저장
    await setDoc(newChannelRef, newChannel);

    //새로 생성된 채널의 ID를 반환
    return id;
};


export const createMessage  = async ({channelId,text}) => {
    //특정 채널의 메시지 컬렉션 안에 새로운 메시지 문서의 레퍼런스를 생성

    const docRef = doc(db, `channels/${channelId}/message`,text)

    //생성된 문서 레퍼런스에 메세지 데이터를 저장
    //기존 메세지 객체의 모든 속성을 복사하고
    //cratedAt필드를 현재 시간으로 추가
    await setDoc(docRef,{...text, createdAt: Date.now() })
}
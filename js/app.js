// html요소 찾기
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) { 
    // console.dir(loginInput);
    // console.log(event); // 자바스크립트가 콜백함수를 부를 때 발생된 이벤트정보를 argument로 넘겨준다.
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막는다. 
    loginForm.classList.add(HIDDEN_CLASSNAME); // classLis의 메소드를 이용해 재활용성을 높인다.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // 개발자 도구 Applicaiton>Local Storage 참고, window 내장 객체
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

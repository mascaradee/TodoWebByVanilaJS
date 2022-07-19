// 아이디로 요소 찾기
const title = document.getElementById('title'); // 아이디가 title인 요소를 자바스크립트 객체로 만든다.
console.dir(title); // 자바스크립트 객체를 출력한다. 
title.innerText = "Got you!"; // 변경도 가능하다. 

// 클래스로 요소 찾기 - array 반환
const titles = document.getElementsByClassName('hello');
console.log(titles);

// 태그명으로 요소 찾기 - array 반환
const titleTag = document.getElementsByTagName('h1');
console.log(titleTag);

// 셀렉터로 요소 찾기(대중적인 방법) 
const divH1 = document.querySelector('.hello h1');
console.log(divH1);

const divH1s = document.querySelectorAll('.hello h1');
console.log(divH1s);
divH1s[0].innerText = 'Hello';

// 이벤트

// 기본
// function handleTitleClick() {
//     console.log('title was clicked!');
// }
// divH1.addEventListener('click', handleTitleClick);

// 콜백함수에 화살표함수이용 (이벤트 삭제에 더 용이)
divH1.addEventListener('click', () => divH1.style.color = "blue");
divH1.addEventListener('mouseenter', () => divH1.innerText = 'mouse is here');
divH1.addEventListener('mouseleave', () => divH1.innerText = 'mouse is gone');


// 요소의 프로퍼티 이용
// divH1.onclick = () => divH1.style.color = "blue";
// divH1.onmouseenter = () => divH1.innerText = 'mouse is here';
// divH1.onmouseleave = () => divH1.innerText = 'mouse is gone';

// document.body는 특이 케이스로 .으로 불러올수 있다. 
window.addEventListener('resize', () => document.body.style.backgroundColor = 'tomato');
window.addEventListener('copy', () => alert('copier!'));
window.addEventListener('offline', () => alert('SOS no WIFI'));
window.addEventListener('online', () => alert('ALL GOOD'));

// 조건문 사용해서 색깔 바꾸기
const h1 = document.querySelector('#changecolor h1');

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if ( currentColor === 'blue') {
        newColor = 'tomato'
    } else {
        newColor = 'blue';
    }
    h1.style.color = newColor;
}
h1.addEventListener('click', handleTitleClick);

// css로 색깔 적용하기
// className은 기존의 클래스명 유무에 상관없이 통으로 바꿔버린다. 
// const cssH1 = document.querySelector('.hi h1');

// function handleTitleClick2() {
//     const clickedClass = "active"
//     const currentClassNam = cssH1.className;
//     let newClassName;
//     if (currentClassNam === clickedClass) {
//         newClassName = '';
//     } else {
//         newClassName = clickedClass;
//     }
//     cssH1.className = newClassName;
// }

// cssH1.addEventListener('click', handleTitleClick2);

// className 대신 classList 사용 
// const cssH1 = document.querySelector('.hi h1');

// function handleTitleClick2() {
//     const clickedClass = "active"
//     if (cssH1.classList.contains(clickedClass)) {
//         cssH1.classList.remove(clickedClass);
//     } else {
//         cssH1.classList.add(clickedClass);
//     }
// }

// cssH1.addEventListener('click', handleTitleClick2);

// toggle
const cssH1 = document.querySelector('.hi h1');

function handleTitleClick2() {
    cssH1.classList.toggle("active"); // toggle h1태그 유무 확인 -> active 유무 확인 -> 없으면 추가 있으면 삭제
}

cssH1.addEventListener('click', handleTitleClick2);

import "./index.css";
import JS_IMG from './assets/js.jpg';
console.log('Hello World!');

const jsImgHTML = document.createElement('img');
jsImgHTML.className = 'js-img';
jsImgHTML.src = JS_IMG;

document.body.append(jsImgHTML);
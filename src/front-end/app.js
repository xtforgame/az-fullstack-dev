import imageSrcInCode from './iconx.png';

console.log([1, 2, 3].map(v => v).join(', ')); // eslint-disable-line no-console

const div1 = document.createElement('div');
const text1 = document.createTextNode('Image From Public :');
div1.appendChild(text1);

const imgFromPublic = document.createElement('img');
imgFromPublic.src = './images/icon.png';


const div2 = document.createElement('div');
const text2 = document.createTextNode('Image From Src :');
div2.appendChild(text2);

const imgFromSrc = document.createElement('img');
imgFromSrc.src = imageSrcInCode;

const element = document.getElementById('page_main');
element.appendChild(div1);
element.appendChild(imgFromPublic);
element.appendChild(div2);
element.appendChild(imgFromSrc);

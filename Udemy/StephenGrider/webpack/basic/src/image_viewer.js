
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

import '../styles/image_viewer.css';

// const image = document.createElement('img');
// image.src = 'https://lorempixel.com/400/400';
// document.body.appendChild(image);

const smallImg = document.createElement('img');
smallImg.src = small;
document.body.appendChild(smallImg);

const bigImg = document.createElement('img');
// bigImg.src = `build/${big}`;
bigImg.src = big;
document.body.appendChild(bigImg);

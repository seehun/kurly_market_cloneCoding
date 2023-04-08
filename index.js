//banner image change

let banner_images = [
  ['https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/1e97c25c-b29e-4ae9-a3c6-281fdab06f39.jpg',1],
  ['https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/eb19db69-dd28-4d6d-b0ee-69e8bf05323d.jpg',2],
  ['https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/80ecd564-e0cd-4935-b7ed-5f0c4268adef.jpg',3],
];

//spread 연산자 실습
banner_images = [...banner_images, 
['https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/6dd20495-01e5-48c4-9d9e-ec71b066668e.jpg',4]
]

const mainImage = document.querySelector('#main-image');
mainImage.src = banner_images[0][0]
const currentImageNum = document.querySelector('.current-image-num');
const totalImageNum = document.querySelector('.total-image-num');
totalImageNum.innerHTML = banner_images.length;

let image =0
const img_drop = ()=>{
  image = (image+1)%banner_images.length;
  mainImage.src = banner_images[image][0]
  currentImageNum.innerHTML = banner_images[image][1]
}
let slide = setInterval (img_drop,3000)

const imgLeftBtn = document.querySelector('.left-btn');
const imgRightBtn =document.querySelector('.right-btn');

imgLeftBtn.addEventListener('click',()=>{
  if (image===0){
    image=banner_images.length-1;
  }
  else{
    image = (image-1)%banner_images.length;
  }
  mainImage.src = banner_images[image][0];
  currentImageNum.innerHTML = banner_images[image][1];
  clearInterval(slide);
  slide = setInterval (img_drop,3000);

})
imgRightBtn.addEventListener('click',()=>{
    image = (image+1)%banner_images.length;
    mainImage.src = banner_images[image][0]
    currentImageNum.innerHTML = banner_images[image][1]
    clearInterval(slide);
    slide = setInterval (img_drop,3000)
})


//timer

const hourElem =document.querySelector('.timer-hour');
const minuteElem =document.querySelector('.timer-minute');
const secondElem =document.querySelector('.timer-second');

hour = parseInt(hourElem.innerText)
minute = parseInt(minuteElem.innerText)
second = parseInt(secondElem.innerText)
totalSecond = hour*3600+minute*60+second;

const timeExpression = (total)=>{
  let total_hour = parseInt(total/3600);
  total = total-(total_hour*3600);
  let total_minute = parseInt(total/60);
  total = total - (total_minute*60);
  let total_second = total;

  if(total_hour<10){
    hourElem.innerHTML = `0${total_hour}`
  }else{
    hourElem.innerHTML = `${total_hour}`
  }

  if(total_minute<10){
    minuteElem.innerHTML = `0${total_minute}`
  }else{
    minuteElem.innerHTML = `${total_minute}`
  }

  if(total_second<10){
    secondElem.innerHTML = `0${total_second}`
  }else{
    secondElem.innerHTML = `${total_second}`
  }
}

const countDown=()=>{
  totalSecond-=1;
  timeExpression(totalSecond);
  if(totalSecond===0){
    clearInterval(timer);
    alert('마감!')
  }

}
let timer = setInterval(countDown,1000);

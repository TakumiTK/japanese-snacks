/*index.html */
window.addEventListener('load', function () {
   viewSlide('.slide img');
});

function viewSlide(className, slideNo = -1) {
   let imgArray = document.querySelectorAll(className);
   if (slideNo >= 0) {
      imgArray[slideNo].style.opacity = 0;
   }
   slideNo++;
   if (slideNo >= imgArray.length) {
      slideNo = 0;
   }
   imgArray[slideNo].style.opacity = 1;
   // 時間を固定したい場合、ここでミリ秒を指定する
   let msec = 4000; //4秒
   setTimeout(function () {
      viewSlide(className, slideNo);
   }, msec);
}

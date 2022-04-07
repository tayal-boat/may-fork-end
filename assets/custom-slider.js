  let slides = Array.from(document.querySelectorAll(".slidesr"));
      let autoSlide = true;
let dots = Array.from(document.querySelectorAll(".dt"));
      let slider_track = document.querySelector(".slider_track");
      let prevBtn = document.querySelector(".prev_ar");
      let nextBtn = document.querySelector(".next_ar");	
	 let intervalTime = Number(document.querySelector('.interval_time').textContent);
      const previousSlide = () => {
        let slInd;
        let prevSlide;
        let slide = slides.find((sl, ind, arr) => {
          if (sl.classList.contains("active_slide")) {
            sl.classList.toggle("active_slide");
            slInd = ind;
            return sl;
          }
        });
        if (slInd > 0) {
          prevSlide = slides[slInd - 1];
        } else {
          prevSlide = slides[slides.length - 1];
        }
        slide.style.display = "none";
        prevSlide.style.display = "block";
        setTimeout(function () {
          prevSlide.classList.toggle("active_slide");
        }, 10);
      };
      const nextSlide = () => {
        let slInd;
        let nextSlide;
        let slide = slides.find((sl, ind, arr) => {
          if (sl.classList.contains("active_slide")) {
            sl.classList.toggle("active_slide");
            slInd = ind;
            return sl;
          }
        });
        if (slInd < slides.length - 1) {
          nextSlide = slides[slInd + 1];
        } else {
          nextSlide = slides[0];
        }
        slide.style.display = "none";
        nextSlide.style.display = "block";
        setTimeout(function () {
          nextSlide.classList.toggle("active_slide");
        }, 10);
      };
const prevDt = function(){
	let dtInd;
        let prevdt;
        let dt = dots.find((sl, ind, arr) => {
          if (sl.classList.contains("active_dt")) {
            sl.classList.toggle("active_dt");
            dtInd = ind;
            return sl;
          }
        });
        if (dtInd > 0) {
          prevdt = dots[dtInd - 1];
        } else {
          prevdt = dots[dots.length - 1];
        }

          prevdt.classList.toggle("active_dt");
}
const nextDt = function(){
        let dtInd;
        let nextDt;
        let dt = dots.find((sl, ind, arr) => {
          if (sl.classList.contains("active_dt")) {
            sl.classList.toggle("active_dt");
            dtInd = ind;
            return sl;
          }
        });
        if (dtInd < dots.length - 1) {
          nextDt = dots[dtInd + 1];
        } else {
          nextDt = dots[0];
        }
          nextDt.classList.toggle("active_dt");
}
      ///// Previous button
if(prevBtn){
	      prevBtn.addEventListener("click", function () {
        previousSlide();
        prevDt();
        autoSlide = false;
      });
}
      ///// next button
if(nextBtn){
	nextBtn.addEventListener("click", function () {
        nextSlide();
        nextDt();
                autoSlide = false;
      });
} 
      /////// for touch
      let toucStart;
      let dif;
      let left = false;
      let right = false;
      slider_track.addEventListener("touchstart", function (e) {
        touchStart = e.targetTouches[0].pageX;
        autoSlide = false;
      });
      slider_track.addEventListener("touchmove", function (e) {
        dif = touchStart - e.targetTouches[0].pageX;
        if (dif > 10 && !right) {
          nextSlide();
          nextDt();
          right = true;
        } else if (dif < 0 && !left) {
          previousSlide();
          prevDt();
          left = true;
        }
      });
      slider_track.addEventListener("touchend", function (e) {
        left = false;
        right = false;
      });

      ///////////////// Auto slide
        setInterval(function () {
            if (autoSlide && intervalTime >= 1000) {
          nextSlide();
          nextDt();   }
        }, intervalTime);
/////// on clicking dots \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
dots.forEach(function(el,ind,arr){
  el.addEventListener('click',function(e){
  	e.preventDefault();
    autoSlide = false;
        dots.forEach(function(elm){
    	elm.classList.remove('active_dt');
    })
    el.classList.add('active_dt');
    slides.forEach(function(element,index){
    	element.classList.remove('active_slide');
      	element.style.display ='none';

    })
    let correspondSlide = document.querySelector(`.${el.dataset.sec}`);
    correspondSlide.style.display = 'block';
    setTimeout(function(){
    	correspondSlide.classList.add('active_slide');
    },0)
  })
})
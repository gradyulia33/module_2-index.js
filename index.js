
let d=new Date();
let day=d.getDate();
let month=d.getMonth() + 1;
let year=d.getFullYear();
document.write(day + "." + month + "." + year);

function checkTime(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
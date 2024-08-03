



let sideBar = document.getElementsByClassName('nav-items-respo');
let dashIcon = document.getElementsByClassName('dash-icon');
let crossIcon = document.getElementsByClassName('cross-icon');
let notSideBar = document.getElementsByClassName('not-sidebar');
function openSideBar(){
    sideBar[0].style.display = 'flex';
    dashIcon[0].style.display = 'none';
    crossIcon[0].style.display = 'flex';
}
function closeSideBar(){
    sideBar[0].style.display = 'none';
    dashIcon[0].style.display = 'flex';
    crossIcon[0].style.display = 'none';
}
window.addEventListener('DOMContentLoaded',function(){
    checkWindowSize();
});
function checkWindowSize(){
    if(window.innerWidth>=1200){
        sideBar[0].style.display = 'none';
        dashIcon[0].style.display = 'none';
        crossIcon[0].style.display = 'none';
        notSideBar[0].style.display = 'flex';
    }else if(window.innerWidth<1200){
        dashIcon[0].style.display = 'flex';
        notSideBar[0].style.display = 'none';
        crossIcon[0].style.display = 'none';
    }
}
window.addEventListener('resize', checkWindowSize)
function scrollup(id){
    const idd = document.getElementById(id);
      window.scrollTo({
        top: idd.offsetTop-150, 
        left: 0,
        behavior: 'smooth'
      });
    sideBar[0].style.display = 'none';
    dashIcon[0].style.display = 'flex';
    crossIcon[0].style.display = 'none';
  }

  


window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const zoomImage = document.querySelector('.imgIn');

    const zoomLevel =  1.5-scrollPosition / 1000;
    zoomImage.style.transform = `scale(${zoomLevel})`;
    const newAboutDiv = document.getElementById('NewAbout');
    const nadoffset = newAboutDiv.offsetTop;
    // if(window.innerWidth>1000){
    //     if(scrollPosition>=nadoffset-100){
    //         const zoomImage2 = document.querySelector('.imgInAb');
    //         const zoomLevel2 =  1.1-((nadoffset-scrollPosition) / 1000);
    //         zoomImage2.style.transform = `scale(${zoomLevel2})`;
    //     }
    // }else{
    //     if(scrollPosition>=nadoffset+200){
    //         const zoomImage2 = document.querySelector('.imgInAb');
    //         const zoomLevel2 =  1.1-((nadoffset-scrollPosition) / 1000);
    //         zoomImage2.style.transform = `scale(${zoomLevel2})`;
    //     }
    // }
    const footer = document.getElementsByClassName('footer-index');
    const footerTop = footer[0].offsetTop;
    if(scrollPosition>=(footerTop-100)){
        const zoomImage3 = document.getElementsByClassName('imgIn3');
        const zoomLevel3 = 1.2+((scrollPosition-footerTop) / (1000));
        zoomImage3[0].style.transform = `scale(${zoomLevel3})`;
    }
    const experience = document.getElementsByClassName('exp-head');
    const expTop = experience[0].offsetTop;
    if(scrollPosition>=(expTop-200)){
        const zoomImage4 = document.getElementsByClassName('imgInex');
        const zoomLevel4 = 1.2+((scrollPosition-expTop) / (1000));
        zoomImage4[0].style.transform = `scale(${zoomLevel4})`;
    }
});





window.addEventListener('scroll',() =>{
    scrollProgress();
    reveal();
});
function scrollProgress(){
    var winScroll= document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    var scrolled = (winScroll / height)*100;
    document.getElementsByClassName("progress-bar")[0].style.width = scrolled+"%";
}
function reveal(){
    var reveals = document.getElementsByClassName('reveal');
    for(let i=0;i<reveals.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}



document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form");
    form.addEventListener("submit", function (e){
        e.preventDefault();
    });
});
function validate() {
    form.addEventListener("submit", function (e){
        e.preventDefault();
    });
    let name = document.querySelector("#name1");
    let cnt = 0;

    resetError("divname");
    resetError("divemail");
    resetError("divnumber");
    resetError("divmessage");
    resetError("divOptions");
    

    if (!isNaN(name.value) || name.value.length <= 3) {
        setError("divname", "(Required)");
    } else {
        cnt++;
    }

    let email = document.querySelector("#email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setError("divemail", "(Required)");
    } else {
        cnt++;
    }

    let phNumber = document.querySelector("#telphone").value;

    if (isNaN(phNumber) || phNumber.length !== 10) {
        setError("divnumber", "(Required)");
    } else {
        cnt++;
    }

    let option = document.querySelector('#options').value;
    if(option == ''){
        setError("divOptions","(Required)");
    }else{
        cnt++;
    }

    let date = document.querySelector('#date').value;
    if(date == ''){
        setError("divDate","(Required)");
    }else{
        cnt++;
    }
    let message = document.querySelector("#textarea");

    if (message.value.trim() === "") {
        setError("divmessage", "(Required)");
    } else {
        cnt++;
    }
    
    if (cnt === 6) {
        let formData = new FormData(form);
        let url = 'https://script.google.com/macros/s/AKfycbztMdkLc6G0LOYGg4mo9Tvv4CBOhlj_kV1xmvK5czMveoYZefjw1ILoT786UP9ZLWk/exec';

        fetch(url, {
            method: "POST",
            body: new URLSearchParams(formData),
        })
            .then((res) => res.text())
            .then((finalRes) => {
                console.log(finalRes);
                showSuccessMessage();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}

function setError(id, error) {
    let element = document.getElementById(id);
    let errorElement = element.querySelector(".CS2MC1FMCLabel span");

    if (errorElement) {
        errorElement.innerHTML = error;
    }
}

function resetError(id) {
    let element = document.getElementById(id);

    if (element) {
        let errorElement = element.querySelector(".CS2MC1FMCLabel span");

        if (errorElement) {
            errorElement.innerHTML = "";
        }
    }
}
// 
function showSuccessMessage() {
    let okieThanks = document.getElementById("successIcon");
    okieThanks.style.display = "flex";

    okieThanks.addEventListener("animationend", function () {
        okieThanks.style.display = "none";
    });

    document.querySelector('#form').reset();
}
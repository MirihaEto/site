//Script File

var menuBtn = document.querySelector('.menu-btn');
var navbarLinksWrapper = document.querySelector('.navbar-links');
var navbarLinks = document.querySelectorAll('.navbar-links li a');
menuBtn.addEventListener('click',toggleMenu);
//Function For Toggling Menu Button And Menu
function toggleMenu(){
    menuBtn.classList.toggle('active');
    navbarLinksWrapper.classList.toggle('active');

function removeFunction(){
    menuBtn.classList.remove('active');
    navbarLinksWrapper.classList.remove('active');
}

for(var i=0; i < navbarLinks.length;i++){
    navbarLinks[i].addEventListener('click',removeFunction);
}
}

//Code To Show/Hide Menu When Scrolling
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollingFunction);
window.addEventListener('load', pageScrollingFunction);
function pageScrollingFunction(){
    if(window.scrollY > 140){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active'); 
    }
}





//Book section
//let scrollContainer = document.querySelector(".galery");
            //let backBtn=document.getElementById("backBtn");
            //let nexBtn=document.getElementById("nextBtn");
            
            //nexBtn.addEventListener("click", ()=>{
                //scrollContainer.style.scrollBehavior="smooth";
                //scrollContainer.scrollLeft += 410;
            //});
            //backBtn.addEventListener("click", ()=>{
                //scrollContainer.style.scrollBehavior="smooth";
                //scrollContainer.scrollLeft -= 410;
            //});

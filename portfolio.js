const navbar=document.querySelector('.navbar');
const navbaroffsetTop=navbar.offsetTop;
const sections=document.querySelectorAll('section');
const navlink=document.querySelectorAll('.nav-link');
const barwrap=document.querySelector('.progress-bar-wrapper');
const spans=document.querySelectorAll('.digit');
window.addEventListener('scroll',()=>{
   mainFun();
});
const mainFun=()=>{
    if(window.pageYOffset >= navbaroffsetTop){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
    sections.forEach((section,i)=>{
        if(window.pageYOffset>=section.offsetTop-7){
            navlink.forEach(x=>{
                x.classList.remove('change');
            })
            navlink[i].classList.add('change');
        }
    })
    if(window.pageYOffset+window.innerHeight>=barwrap.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el,i)=>{
            el.style.width=`${spans[i].textContent}%`
        })
    }
}
mainFun();
// window.addEventListener('resize',()=>{
//     window.location.reload();
// });

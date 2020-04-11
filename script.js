const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
function fixedNav() {
    if(window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
        // document.body.style.paddingTop = nav.offsetHeight;
    } else {
        document.body.classList.remove('fixed-nav');  
        // document.body.style.paddingTop = 0; 
    }
}

window.addEventListener('scroll', fixedNav);
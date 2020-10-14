let nav = document.getElementsByTagName("nav")[0];
let sticky = nav.offsetTop;

let handleScroll = () => {
    if(window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
}
window.onscroll = handleScroll;
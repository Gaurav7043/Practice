function changebg_header(){
    let changebg = document.getElementById("head");
    let current = window.scrollY; // vertical scroll
    if(current > 0){
        changebg.classList.add("header_fixed");
    }else{
        changebg.classList.remove("header_fixed");
    }
}
window.addEventListener("scroll", changebg_header);
// change a background color with scroll bar
window.addEventListener("scroll", function(){
    let changebg = document.getElementById("head");
    let current = window.scrollY; // vertical scroll
    if(current > 0){
        changebg.classList.add("header_fixed");
    }else{
        changebg.classList.remove("header_fixed");
    }
});
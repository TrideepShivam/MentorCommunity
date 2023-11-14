const menu = document.getElementById('menuCloseCheckbox');
menu.addEventListener("change",function(){
    let nav = document.querySelector(".menuContainer");
    nav.style.width=(this.checked)?"4rem":"18rem";    
});
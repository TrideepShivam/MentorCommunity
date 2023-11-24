import {RequestServer} from './RequestServer.js';

const menu = document.getElementById('menuCloseCheckbox');
menu.addEventListener("change",function(){
    let nav = document.querySelector(".menuContainer");
    nav.style.width=(this.checked)?"4rem":"18rem";    
});
let menuList = document.querySelector(".menu");
menuList.addEventListener("mouseover",()=>{
    console.log(menuList.id);
});
let test = document.querySelector(".communityAndSearchContainer");
test.addEventListener("mouseover",function(){
    let request = new RequestServer(this);
    setInterval(request.wait(),5000);
});

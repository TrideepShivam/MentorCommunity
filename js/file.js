const switchButton = document.getElementsByClassName('switchFormButton');
switchButton[0].addEventListener("click",()=>{
     switchButton[1].parentElement.style.cssText="display:flex;";
     switchButton[0].parentElement.style.cssText="display:none;";
},true);
switchButton[1].addEventListener("click",()=>{
    switchButton[0].parentElement.style.cssText="display:flex;";
    switchButton[1].parentElement.style.cssText="display:none;";
},true);
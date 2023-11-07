const switchButton = document.getElementsByClassName('switchFormButton');
switchButton[0].addEventListener("click",()=>{
     alert(switchButton[1].parentElement.className);
     switchButton[0].parentElement.style.width="0%";
},true);
switchButton[1].addEventListener("click",()=>{
    switchButton[0].parentElement.style.width="100%";
    switchButton[1].parentElement.style.width="0%";
},true);
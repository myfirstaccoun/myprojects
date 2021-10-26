let key = document.querySelector(".keyCode");
let key2 = document.querySelector(".code");
let name = document.querySelector(".keyName");
let allform = document.querySelector(".allinform");
let form = document.querySelector(".keysform");
let press = document.querySelector(".pressany");

window.onkeydown = (pr) => {
    
    if (allform.style.display == "") {
        allform.style.display = "block";
        form.classList.add("margtop");
        press.style.display = "none";
        form.classList.add("show");
    }

    name.innerText = pr.key.toUpperCase();
    
    if (name.innerText == "") {
        name.innerText = "SPACE";
    }

    key.innerText = pr.keyCode;
    key2.innerText = pr.keyCode;

    if (key2.innerText >= 100) {
        key2.style.right = "15%";
    } else {
        key2.style.right = "28%";
    }

}
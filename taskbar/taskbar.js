let body = document.querySelector("body");
let home = document.querySelector(".home");
let backbtn = document.querySelector(".back");
let x = window.matchMedia("(max-width: 560px)");
const homepg = "https://myprojects513.netlify.app/";


function myFunction(x) {
    backbtn = document.querySelector(".back");

    if (location != homepg) {
        home = document.querySelector(".home");

        if (x.matches) {
            home.innerText = "◀";
            backbtn.innerText = "▶";
        } else {
            home.innerText = "العودة إلى الصفحة الرئيسية -->";
            backbtn.innerText = "<-- العودة إلى الصفحة السابقة";
        }
    }
}

function homefx() {
    location = homepg;
}

let page = -1;



if (location.href != homepg) {
    page = -1;
    body = document.querySelector("body");
    
    const taskdiv = document.createElement("div");
    taskdiv.classList.add("task-bar");
    body.prepend(taskdiv);

    const taskhome = document.createElement("button");
    taskhome.classList.add("bar","home");
    taskhome.innerText = "العودة إلى الصفحة الرئيسية -->";
    taskdiv.append(taskhome);

    const taskh1 = document.createElement("h1");
    taskh1.classList.add("name");
    taskh1.innerText = "يوسف عجيبة";
    taskdiv.append(taskh1);

    const taskback = document.createElement("button");
    taskback.classList.add("bar" , "back");
    taskback.innerText = "<-- العودة إلى الصفحة السابقة";
    taskdiv.append(taskback);

    setTimeout(() => {
        home = document.querySelector(".home");
        home.onclick = function() {homefx();};
    }, 1);
    
} else {
    page = 0;
    body = document.querySelector("body");


    const taskdiv = document.createElement("div");
    taskdiv.classList.add("task-bar");
    body.prepend(taskdiv);

    const taskh1 = document.createElement("h1");
    taskh1.classList.add("name");
    taskh1.innerText = "يوسف عجيبة";
    taskdiv.append(taskh1);

    const taskback = document.createElement("button");
    taskback.classList.add("bar" , "back");
    taskback.innerText = "<-- العودة إلى الصفحة السابقة";
    taskdiv.append(taskback);

}

myFunction(x);

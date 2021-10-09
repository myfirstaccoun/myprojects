let body = document.querySelector("body");
let home = document.querySelector(".home");
let backbtn = document.querySelector(".back");
let x = window.matchMedia("(max-width: 560px)");
const homepg = "file:///C:/%D8%AA%D8%AF%D8%B1%D8%A8%20%D8%B9%D9%84%D9%89%20%D8%B5%D9%86%D8%B9%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9/%D8%AA%D8%B9%D9%84%D9%85%20%D8%AC%D8%A7%D9%81%D8%A7%20%D8%B3%D9%83%D8%B1%D8%A8%D8%AA/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9.html";
console.log(location);

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
    } else {
        backbtn.style.fontSize = "100%";
    }
}

function homefx() {
    location = "../الصفحة الرئيسية/الصفحة الرئيسية.html";
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

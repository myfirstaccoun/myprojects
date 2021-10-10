setTimeout(() => {
    const body = document.querySelector(".befstart");
    const start = document.querySelector("[start]");
    const h1 = document.querySelector(".hed1");
    const hedd1 = document.getElementsByClassName("hed1");
    
    const add = () => {
        const aaddbtn = document.createElement("button");
        aaddbtn.innerText = "إضافة"
        body.append(aaddbtn);
        aaddbtn.setAttribute("add", "");
    }
    
    const remove = () => {
        const rmovall = document.createElement("button");
        rmovall.innerText = "إلغاء الكل"
        body.append(rmovall);
        rmovall.setAttribute("remove", "");
    }
    
    add();
    remove();
    
    const addbtn = document.querySelector("[add]");
    const removebtn = document.querySelector("[remove]");
    
    function chal1fx() {
    
       let i = 1;
       let result = i % 2;
    
       addbtn.onclick = function () {
        const h1 = document.createElement("h1");
    
        if (result == 0) {
            start.prepend(h1);
        } else {
            start.append(h1);
        };
    
        h1.classList.add("hed1")
        h1.innerText = "عنوان " + i;
        i++;
        result = i % 2;
        }
    
        removebtn.onclick = function () {
            const removebtn2 = document.querySelectorAll(".hed1");
            removebtn2.forEach(item => {
                item.remove();
            });
            i = 1;
    
        }
    }
    
    
    chal1fx();
}, 20);
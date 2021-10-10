const btn = document.querySelector(".project");

function right(str, chr) {
    return str.slice(str.length-chr,str.length);
}
  
function left(str, chr) {
    return str.slice(0, chr - str.length);
}

function goto(id) {
    idresult = right(id,1);
    // location = `المشروع ${idresult}/مشروع.html`;
    location = "www.youtube.com";
}

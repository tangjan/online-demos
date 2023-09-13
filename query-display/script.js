let key = 'digit', number = '1234567890';
document.getElementById("digit").innerHTML= key;
document.getElementById("number").innerHTML= number;

const changeSubmit = document.querySelector(".changeSubmit");
const changeDigit = document.querySelector(".changedDigit");

changeSubmit.addEventListener("click", change);

function change(){
    history.pushState({}, 0, delUrlParam(key)); 
    history.pushState({}, 0, addUrlParam(key, changeDigit.value));
    document.getElementById("number").innerHTML= changeDigit.value;
}

function delUrlParam(param){
    let obj = new window.URL(window.location.href);
    obj.searchParams.delete(param);
    return obj.href;
}

function addUrlParam(key, value){
    let obj = new window.URL(window.location.href);
    obj.searchParams.set(key, value);
    return obj.href;
}

history.pushState({}, 0, addUrlParam(key, number));
function display(){
    document.getElementById("digit").innerHTML= key;
    document.getElementById("number").innerHTML= number;
}
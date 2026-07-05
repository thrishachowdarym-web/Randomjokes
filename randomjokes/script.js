let jokeTextEl=document.getElementById("jokeText");
let jokeBtnEl=document.getElementById("jokeBtn");
let spinnerEl=document.getElementById("spinner");

jokeBtnEl.onclick=function(){
    spinnerEl.classList.toggle("d-none");
    let url="https://apis.ccbp.in/jokes/random";
    let option={
        method:"GET"
    };
    fetch(url,option)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        spinnerEl.classList.toggle("d-none");
        jokeTextEl.textContent=data.value;
        jokeTextEl.classList.add("joke-text")
    });
}
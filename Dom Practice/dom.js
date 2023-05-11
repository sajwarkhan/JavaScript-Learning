const modal = document.querySelector(".modal")
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const backdrop = document.querySelector("#backdrop");



openBtn.addEventListener("click", function(){
    modal.style.display = "block";
    backdrop.style.display = "block";
})
closeBtn.addEventListener("click", Close)
backdrop.addEventListener("click",Close)

function Close(){
    modal.style.display = "none";
    backdrop.style.display = "none"; 
}


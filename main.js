let icon = document.querySelector("#iconelement")
let ulelement = document.querySelector("#links")
let btns = document.querySelector("#buttons")
let closeButton = document.querySelector("#closebtn")

icon.addEventListener("click", function(){
    ulelement.style.display = "flex"
    btns.style.display = "block"
    icon.style.display = "none"
    closeButton.style.display = "block"
})

closeButton.addEventListener("click", function(){
    ulelement.style.display = "none"
    btns.style.display = "none"
    icon.style.display = "block"
    closeButton.style.display = "none"
})




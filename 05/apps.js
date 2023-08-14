const items = document.querySelectorAll(".item");

items.forEach((item) =>{
    item.addEventListener("click",()=>{
        removeActiveClass();
        item.classList.add("active")
        
    })
})
function removeActiveClass(){
    items.forEach((item) =>{
        item.classList.remove("active")
    })
}
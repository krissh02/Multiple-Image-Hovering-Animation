let ele = document.querySelectorAll(".ele");

ele.forEach((val)=>{
    val.addEventListener("mouseenter",()=>{
       val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave",()=>{
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener("mousemove",(evnt)=>{
        val.childNodes[3].style.left = evnt.x + "px";
        // val.childNodes[3].style.top = evnt.y + "px";
    })
})
let btn = document.querySelector("button")

btn.addEventListener("click",(event)=>{

    let img1 = document.getElementById("img1")
    let img2 = document.getElementById("img2")

    let imgSrc1 = img1.getAttribute("src")
    let imgSrc2 = img2.getAttribute("src")

    img1.removeAttribute("alt")
    console.log(img1);
    
    img1.setAttribute("src", imgSrc2)
    img2.setAttribute("src", imgSrc1)
})
let btn = document.querySelector(".btn")
let body = document.querySelector("body")


// btn.addEventListener("click",()=>{
//     body.classList.toggle("dark")

// })

// let imgSrc = "https://www.pngplay.com/wp-content/uploads/7/Cockroach-PNG-HD-Quality-preview.webp"

// btn.addEventListener("click", ()=>{
//    let img = document.createElement("img")
//     img.src = imgSrc
//     img.className = "image"


//     let top = Math.floor(Math.random()*80)
//     let left = Math.floor(Math.random()*80)

//     img.style.position = "absolute";
//     img.style.top = `${top}%`
//     img.style.left = `${left}%`
//     console.log(img);
    
//     body.prepend(img)
//     console.log(body);
    
// })


console.log(body);
btn.addEventListener("click" , ()=>{

    let p = document.querySelector("p")
    let h1 = document.createElement("h1")
    h1.innerText = "hat gya jo phle tha"
    // body.removeChild(p)
    
    body.replaceChild(h1,p)

    console.log(body);
    
})
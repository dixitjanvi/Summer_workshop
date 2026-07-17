let userData = [];

let form = document.querySelector("form")
let str = "kjdlhfdsalf"


form.addEventListener("submit", (event)=>{
    event.preventDefault()


    let name = event.target[0].value
    let id = event.target[1].value
    let role = event.target[2].value
    let profile = event.target[3].value;

    let user = {
        name : name,
        id : id,
        role : role,
        profile : profile
    }
     
    userData.push(user)
    userRender()

    event.target[0].value = ""
    event.target[1].value = ""
    event.target[2].value = ""
    event.target[3].value = ""
    
})


function userRender() {
    let container = document.querySelector(".container");

    container.innerHTML = ""

    userData.forEach((user)=>{
        container.innerHTML += `<div class="card">
            <img src="${user.profile}" alt="">
            <div class="bottom">
                <h2>Name : ${user.name}</h2>
                <p><b>Id :</b> ${user.id}</p>
                <p><b>Role :</b>  ${user.role}</p>
            </div>
        </div>`
    })
}

userRender()
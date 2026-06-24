// console.log("Hello guy's");

// //Set timeout
// setTimeout(()=>{
//     console.log("Nothing");
// },2000)

// setTimeout(()=>{
//     console.log("What happend?...");
// },1000)


// //Set interval
// let count  = 10
// let time = setInterval(()=>{
//     console.log(count);
//     count--
//     if(count<0){
//         console.log("Time out!!!");
//         clearInterval(time)
//     }
// },1000)


// let promise = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)

//             if(num>=4){
//                 console.log(num);

//                     resolve("Let's have a fun!!!")
//             }else{
//                 console.log(num);

//                    reject("Not this time")
//                 }
//     },1000)
// })

// console.log(promise);
// promise
// .then((res)=>{
//     console.log(res);
//     console.log(promise);
// })
// .catch((err)=>{
//     console.log(err);
//     console.log(promise);
// })


// console.log(a);
// var a = 10;
// let x = 20;
// console.log(x);
// //cannot access 'y' before initialization
// // y is not defined at 
// console.log(y);
// const y = 50;

// async function access(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos")
//    // console.log(response);
//     let data = await response.json()
//     console.log(data);
// }

// access()

// async function access(){
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos")
//         // console.log(response);
//         let data = await response.json()
//         console.log(data);
        
//         //Object to JSON
//         let jsonData = JSON.stringify(data)
//         console.log(jsonData);

//         //JSON to object
//        // let  object = JSON.parse(jsonData)
//         console.log(JSON.parse(jsonData));

        
//     } catch (error) {
//         console.log(error);
//     }
// }

// access()


// function fun() {
//     try {
//         let num = Math.floor(Math.random()*2)+1
//         if(num === 1){
//             console.log(num);
//             console.log("Everything is done....");
//         }
//         else{
//             console.log(num);
//             throw new Error("It's not done");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// fun()


localStorage.setItem("name","Janvi")
localStorage.setItem("age","20")

//all data delete 
//localStorage.clear()

//select data then delete these
localStorage.removeItem("age")

let id = localStorage.getItem("name")
console.log(id);
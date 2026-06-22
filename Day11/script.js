// let userData ={
//     fname : "janvi",
//     lname : "Dixit",
//     mobile : 7563291562,
//     address : {
//         city : "Sagar",
//         State : "MadhyaPradesh"
//     },
//     fun(){
//         console.log("hello "+ this.fname)
//     }
// }
// //operator-spread
// let copyData = {...userData}
// copyData.lname = "Tiwari"
// copyData.address.city = "Pune"
// copyData.address.State = "Maharastra"

// console.log(copyData);
// console.log(userData);

// //console.log(userData.mobile);
// //update
// userData.mobile = 7589913548
// userData.address.city = "Bhopal"

// //add
// userData.roll_no = 242689

// //delete
// delete userData.mobile

// console.log(userData);

// //userData.fun()

// //operator-rest
// function print(...e){
//     // console.log(a);
//     // console.log(b);
//     // console.log(e);
//     e.forEach((val, idx)=>{
//         console.log(val, "===>" ,idx);
//     })
// }
// print(10,20,30,40,50)

// //String
// let str = 'hello guyss'
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(3));
// console.log(str.includes("l"));
// console.log(str.includes("z"));
// console.log(str.slice(0,4));
// console.log(str.split(" "));
// //remove the unnessasry spaces
// console.log(str.trim());

// console.log(str.replace('e','i'));
// console.log(str.replaceAll('e','i'));

// let n=2.5;

// console.log(Math.floor(n));    //2
// console.log(Math.ceil(n));     //3

// console.log(Math.min(25,50));     //25
// console.log(Math.max(10,20));     //20




// let val = Math.random()
// console.log(val);

// let val = Math.floor(Math.random())
// console.log(val);

// let val = Math.floor(Math.random()*50)
// console.log(val);


// let val = Math.floor(Math.random()*(Max-Min)+Min)
// console.log(val);

// let val = Math.floor(Math.random()*(200-100)+100)
// console.log(val);

// let name = "janvi"
// let greet = "hello" + name +" How are you?..." 
// let greet  = "hello $name "
// console.log(greet);

// let userData = {
//      fname : "janvi",
//      lname : "Dixit",
//      mobile : 7563291562,
// }
// //object destructuring
// let  {fname} = userData

// //let  (name) = userData
// //console.log(name);

// console.log(fname);
// console.log(lname);

// for (const key in userData){
//     console.log(userData['${key}']);
    
// }

// let arr =[10,20,30,40,50]
// for(const key in arr){
//     console.log(key)
// }

// let arr =[10,20,30,40,50]
// for(const key of arr){
//     console.log(key)
// }


function fun(){
    let a = 10
    let b = 20
    function sum(){
        console.log(a+b);
    }
    return sum
}
let returnFun = fun()

returnFun()
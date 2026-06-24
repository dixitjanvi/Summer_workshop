

// let balance = 5000;
// let choice;

// do{
//     choice = Number(prompt("select your choice 1.withdrow, 2.deposite, 3.check balance, 4.exit "))

//     switch (choice) {
//         case 1:
//             let withdrow = Number(prompt("enter your amount :"))
//             if(balance < withdrow){
//                 alert("chala jaa kjdfdsaf")

//             }else{
//                 balance -= withdrow;
//                 console.log("collect your amount");
//                 console.log("balance :"+ balance);
//             }
//             break;

//         case 2 :
//             let deposit = Number(prompt("enter your amount :"))
//             balance += deposit
//             console.log("successfully deposit");
//             break;
    
//         default:
//             alert("please select correct option")
//             break;
//     }

// }while(choice !== 4)
// sum()

// function sum() {
//     let a = 10;
//     let b = 20;
//     console.log(a+b);
    
// }


// let greet = function() {
//     console.log("hello guys");
    
// }
// greet()

// let fun = ()=>{
//     console.log("chacha.....");
    
// }
// fun()

// ()()

// IIFE
// (
//     function() {
//         console.log("chal rha hai...");
        
//     }
// )()



// Higher order function
// function fun(naam) {
//     console.log("apka kam ho gya hai ab chale jao");
//     console.log(naam +" bye bye");
    
    
// }

// function greet(name , guys ) {
//     console.log("hello "+name);
//     chacha("janvi")
    
// }

// greet("krish",fun)



// function fun() {
//     let a = 10
//     let b = 20
    
//     return function sum() {
//         console.log(a+b);
        
//     }

  
// }


// let add = fun()
// add()


function print(name, age=60) {
    console.log("your name is :"+name +" and your age is :"+age);
       
}

print("Janvi",20)
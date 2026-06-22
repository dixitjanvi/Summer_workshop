let userData ={
    fname : "janvi",
    lname : "Dixit",
    mobile : 7563291562,
    address : {
        city : "Sagar",
        State : "MadhyaPradesh"
    },
    fun(){
        console.log("hello "+ this.fname)
    }
}
//operator-spread
let copyData = {...userData}
copyData.lname = "Tiwari"
copyData.address.city = "Pune"
copyData.address.State = "Maharastra"

console.log(copyData);
console.log(userData);

//console.log(userData.mobile);
//update
userData.mobile = 7589913548
userData.address.city = "Bhopal"

//add
userData.roll_no = 242689

//delete
delete userData.mobile

console.log(userData);

//userData.fun()

//operator-rest
function print(...e){
    // console.log(a);
    // console.log(b);
    // console.log(e);
    e.forEach((val, idx)=>{
        console.log(val, "===>" ,idx);
    })
}
print(10,20,30,40,50)

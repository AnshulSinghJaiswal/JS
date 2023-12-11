const user = {
    name: "anshul",
    "full name":"anshul singh jaiswal",
    age:18,
    location:"aligarh",
    email:"abc@gmail.com",
    isloggedin:false
}

console.log(user.name);
console.log(user["name"]); //best method

//only method to excess
console.log(user["full name"]);

user.greeting = function(){
    console.log('welcome user');
}
console.log(user.greeting());
function calculatecartprice(...num1)
{
    return num1
}
//console.log(calculatecartprice(200,300,400));

//object in function
//step 1 create objectr 
//step 2 create function and call user

const user = {
    username : 'asnhul',
    price : 534
}

function handleobject(anyobject){
    console.log(`username is - ${anyobject.username} and price is ${anyobject.price}`);
}
//handleobject(user)

//direct object pass kar diya
handleobject({
    username : 'anshul',
    price : 456
})

//pasing an aray

const arr = [200,300,500,600]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(arr));
// const arr =[1,2,7,4,5]
 
// const anyFun= arr.reduce((acc, curr)=> {
//     if (acc<curr){
//         acc=curr
//     }
// return acc},0)
// console.log(anyFun)

// const filt = arr.filter(x=>x<7)
// console.log(filt)

const users = [
{ firstName: "akshay", lastName: "saini", age: 26 }, 
{ firstName: "donald", lastName: "trump", age: 75 }, 
{ firstName: "elon", lastName: "musk", age: 50 }, 
{ firstName: "deepika", lastName: "padukone", age: 26 }];

const onlyage = users.reduce(function (acc, curr){
    if (curr.age<30){
        acc.push(curr.firstName)
        acc.push(curr.lastName)
        
    }
return acc;
}, [])
console.log(onlyage)
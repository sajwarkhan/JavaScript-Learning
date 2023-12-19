
// Promise.all is fail fast

// Promise.allSettled all result then showup error if something is final

// promise.race winner come first .. value of the first satteled promise also if fails come first it through an error


// Promise.any   wait for first success not takes error it just ignores and if all fail the reesult will be agreegate error so the list of errors, a best API which success seeking API


const cart= ["buy", "cell", "process" ]

const promise=createOrder(cart)

promise.then (function(orderId){
    // console.log(orderId)
})
.then.Catch(createOrder(err))
function createOrder(cart){
    
    const pr= new Promise (function (resolve, reject){
        if (!approvedCart(cart)){
            const err= new Error ("order is not valid")
            reject(err);
        }
        const orderId = "12323"
        if(orderId){
            setTimeout(function (){

                resolve(orderId);
            },5000);
        }

    });
    return pr;
}
function approvedCart (){

    return false;
}


const data= [

    {
        id: 1 ,
        title : "the lord ",
        author: "OldMan",
    }
]
 function getBooks(){
    return data;
 }
 function getBook(id){
    return data.find((d)=>d.id===id);
 }
 const books= getBook(1);
 const {title, author}= books
//  console.log(books)



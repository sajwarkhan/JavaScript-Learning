const cart= ["buy", "cell", "process" ]

const promise=createOrder(cart)

promise.then (function(orderId){
    console.log(orderId)
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

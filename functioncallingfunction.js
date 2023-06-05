function cutpieces (fruits){

return 4*fruits;
}
function fruitprocessor (apple, oranges){
const applejuice = cutpieces(apple)
const orangejuice = cutpieces(oranges)

juice= `juice of ${applejuice} apple and juice of ${orangejuice} oranges`;
return juice;
}
console.log(

    fruitprocessor(3,4)
)




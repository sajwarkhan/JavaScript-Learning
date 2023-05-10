class Circle{
    constructor (r){
        this.radius = r
    }
    areaOf () {
        return 2*3.14*this.radius
    }
}
let ob = new Circle(5)
let a = ob.areaOf()
console.log(a);
let ob2 = new Circle(10)
let b = ob2.areaOf()
console.log(b);
let ob3 = new Circle(15)
let c = ob3.areaOf()
console.log(c);

let x= 2+5
console.log(x)
let light
console.log(light)
let y=2+"string"
console.log(y)
y=2*'a'
console.log(y)
light=true
console.log(light)
light= 10

console.log(light=='10')



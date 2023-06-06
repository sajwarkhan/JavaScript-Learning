const family =['aftab', 'firzooq', 'adeesh', 'sajwar']

// add elements

family.push('h')
console.log (family)

family.unshift('mama')
console.log(family)





// remove ellements

family.pop() //last
console.log(family)

family.shift()//first
console.log(family)


console.log(family.indexOf('adeesh'))

console.log(family)

console.log(family.includes('adeesh'))
if(family.includes('wolleh')){
    console.log(`you have family member called sajwar`)
}
else{
    console.log(`No! he's not your family member`)
}



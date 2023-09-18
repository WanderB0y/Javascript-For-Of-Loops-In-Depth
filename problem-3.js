const backpacks = new Map();
let totalValue = 0;

backpacks.set(1, {name: "Sword", value: 300})
backpacks.set(2, {name: "Banana", value: 5})
backpacks.set(3, {name: "Gold Nugget", value: 1000})
backpacks.set(4, {name: "Pants", value: 100})

console.log(backpacks)

console.log("-----------")

for ( const backpack of backpacks){
    console.log(`${backpack[1].name} : ${backpack[1].value}`)
    totalValue += backpack[1].value
}

console.log(totalValue)
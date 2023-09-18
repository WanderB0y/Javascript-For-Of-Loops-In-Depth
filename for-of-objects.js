const stockItems = {
    id: 54,
    price: 1.32,
    name: "Apple",
    quantity: 6,
}

for( const [keys, values] of Object.entries(stockItems)){
    console.log(values)
}
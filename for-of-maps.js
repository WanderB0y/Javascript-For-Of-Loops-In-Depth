const myMap = new Map();

myMap.set('name', "Nader");
myMap.set('age', 20);
myMap.set('friend', "Mr. Monkey");

for ( const item of myMap){
    console.log(item[0], item[1])
}
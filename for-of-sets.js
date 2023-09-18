const mySet = new Set();

mySet.add('Hello');``
mySet.add('Monkey');
mySet.add(10);
mySet.add(11);
mySet.add(true);


for ( const item of mySet){
    console.log(item)
}
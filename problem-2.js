const names = new Set();

const capsName = new Set();

names.add("Bilbo");
names.add("Hermione");
names.add("Spock");
names.add("Leia");

for ( const name of names){
    capsName.add(name.toUpperCase())
}

console.log(capsName)
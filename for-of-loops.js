const characters = [ "Frodo", "Harry", "Thanos", "Gandalf", "Yoda" ];

for ( let i = 0; i < characters.length; i++){
    
    characters[i] = characters[i].toUpperCase();
    // console.log(characters[i]);
}

console.log("---------")

for (const character of characters) {
    console.log(character)
}



const arr = [1, 2, 3, 4, 5];

const squared = arr.map(function(element){
    return element*element;
})

console.log(squared);

const names = ["alice", "bob", "charlie", "danielle"]

const cap = names.map((element) => {
    return element[0].toUpperCase() + element.slice(1);
})

console.log(cap);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const ans = pokemon.map((element) =>{
    return `<p>${element}</p>`
})

console.log(ans);
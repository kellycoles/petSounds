const Duke = {
    name: "Luke Duke",
    species: "cat",
    nicknames: ["Duke", "Puke","Duke Duke"],
    age: 16,
    favoriteToys:[],
    meow: function () {  
        console.log("Meow!")},
    puke: function () {  
        console.log("Puke!")},
    poop: function () {  
        console.log("Poop!")},
    play: function(toy){
        if(toy.includes("fuzzy")) {
        this.favoriteToys.push(toy)
    }
}     
}

Duke.meow()
Duke.puke()
Duke.poop()

Duke.play("fuzzy mouse")
Duke.play("fuzzy orange feather")
console.log(Duke)


const Otto = new Object()
Otto.name = "Otto"
Otto.color = "black & white"
Otto.sound = "meow"
console.log(Otto)

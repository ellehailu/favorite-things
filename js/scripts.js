let array = [];
let newArray = [];

window.onload = function(){
    let form = document.querySelector("form");
    form.onsubmit = function(event){

        event.preventDefault();
        const person1Input = document.getElementById("person1Input").value;
        const person2Input = document.getElementById("person2Input").value;
        const animalInput = document.getElementById("animalInput").value;
        const exclamationInput = document.getElementById("exclamationInput").value;
        const verbInput = document.getElementById("verbInput").value;
        const nounInput = document.getElementById("nounInput").value;

        array = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
        newArray.push(array[1], array[0], array[2])

        console.log(array);
        console.log(newArray);

    }
}
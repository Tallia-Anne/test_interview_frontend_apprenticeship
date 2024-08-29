// /////////////////////////////// Task 1: Array Manipulation ///////////////////////////////////////////////////// 

function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(inputArray);
console.log(evenNumbers);


// /////////////////////////////// Task 2: Array Manipulation ///////////////////////////////////////////////////// 


let btnChange = document.getElementById('btnChange');

btnChange.addEventListener('click', () => {

let  textElement = document.getElementById('text')
textElement.textContent = 'Hello , Check !'

});
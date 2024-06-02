function transformString(inputString) {
    const length = inputString.length;

    if (length % 3 === 0) {
        inputString = inputString.split('').reverse().join('');
    }

    if (length % 5 === 0) {
        inputString = inputString.split('').map(char => char.charCodeAt(0)).join('');
    }

    return inputString;
}

const userInput = prompt('Please enter a string:');
const transformedString = transformString(userInput);
console.log('Transformed string:', transformedString);

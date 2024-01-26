const input = 'whale talk';
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
for ( let inputIndex = 0; inputIndex < input.length; inputIndex++) { 
  if (input[inputIndex] === 'e'){
    resultArray.push(input[inputIndex]);
  } if (input[inputIndex] === 'u'){
    resultArray.push(input[inputIndex]);
  }
  //console.log(`inputIndex is ${inputIndex}`);
  for (let vowelsindex = 0 ; vowelsindex<vowels.length;vowelsindex++) //{console.log(`vowelsindex is ${vowelsindex}`)
  if (input[inputIndex] === vowels[vowelsindex]) {
    //console.log(input[inputIndex])
    resultArray.push(input[inputIndex]);
  }
  }

const resultString = resultArray.join('').toUpperCase();
console.log(resultString)


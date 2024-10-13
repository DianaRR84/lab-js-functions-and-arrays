// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }



// Iteration 2 | Find the Longest Word
function findLongestWord(words) {
    if (words.length === 0) {
      return null;  // Return null if the array is empty
    }
  
    let longestWord = words[0];  // Start with the first word
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];  // Update the longest word if a longer one is found
      }
    }
  
    return longestWord;  // Return the longest word
  }




// Iteration 3 | Sum Numbers
function sumNumbers(numbers) {
    let sum = 0;  // Initialize sum as 0
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];  // Add each element to the sum
    }
  
    return sum;  // Return the total sum
  }




// Iteration 4 | Numbers Average
// Reuse the sumNumbers function to calculate the sum of the array
function sumNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  function averageNumbers(numbers) {
    if (numbers.length === 0) {
      return 0;  // Return 0 if the array is empty
    }
  
    const totalSum = sumNumbers(numbers);  // Calculate the sum using sumNumbers function
    return totalSum / numbers.length;  // Return the average (sum divided by the number of elements)
  }




// Iteration 5 | Find Elements
function doesWordExist(words, wordToFind) {
    if (words.length === 0) {
      return null;  // Return null if the array is empty
    }
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === wordToFind) {
        return true;  // Return true if the word is found
      }
    }
  
    return false;  // Return false if the word is not found
  }

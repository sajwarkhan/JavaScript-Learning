// code in python 
// def find_close_number_sets(numbers):
//     numbers.sort() 
    
//     // # Sort the array in ascending order
    
//     result = []
    
//     // # Iterate over the array to find groups of three consecutive numbers
//     for i in range(len(numbers) - 2):
//         first_num = numbers[i]
//         second_num = numbers[i + 1]
//         third_num = numbers[i + 2]
        
//         // # Check if the three numbers are close to each other
//         if abs(first_num - second_num) <= 2 and abs(second_num - third_num) <= 2:
//             result.append([first_num, second_num, third_num])
    
//     return result

// # Example usage
// numbers = [25, 38, 48, 25, 79, 43, 33, 10, 14, 28, 30]
// close_number_sets = find_close_number_sets(numbers)
// print(close_number_sets)

// ---------------------------------------------


function findCloseNumberSets(numbers) {
    numbers.sort((a, b) => a - b); 
    // Sort the array in ascending order
    const result = [];
  
    // Iterate over the array to find groups of three consecutive numbers
    for (let i = 0; i < numbers.length - 2; i++) {
      const firstNum = numbers[i];
      const secondNum = numbers[i + 1];
      const thirdNum = numbers[i + 2];
  
      // Check if the three numbers are close to each other
      if (firstNum - secondNum <= 2 && secondNum - thirdNum <= 2) {
      result.push([firstNum, secondNum, thirdNum]);
      }
    }
  
    return result;
  }
  
  // Example usage
  const numbers = [25, 38, 48, 25, 79, 43, 33, 10, 14, 28, 30];
  const closeNumberSets = findCloseNumberSets(numbers);
  console.log(closeNumberSets);
  
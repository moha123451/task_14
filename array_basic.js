// 1-Write a function to find the largest element in an array.
function findLargest(arr) {
    return Math.max(arr);
  }
  
  console.log(findLargest([5, 12, 3, 8, 20]));
  
// 2-Write a function to find the smallest element in an array.
function findSmallest(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallest([5, 12, 3, 8, 20]));
  
// 3-Write a function to find the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sumArray([5, 12, 3, 8, 20]));
  
// 4-Write a function to find the average of all elements in an array.
function averageArray(arr) {
    return sumArray(arr) / arr.length; 
  }
  
  console.log(averageArray([5, 12, 3, 8, 20]));
  
// 5-Write a function to find the median of all elements in an array.
function medianArray(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
  
    if (arr.length % 2 != 0) {
      return arr[mid]; 
    } else {
      return (arr[mid - 1] + arr[mid]) / 2; 
    }
  }
  
  console.log(medianArray([5, 12, 3, 8, 20])); 
  
// 6-Write a function to remove all duplicates from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)]; 
  }
  
  console.log(removeDuplicates([5, 12, 3, 8, 3, 12])); 
  
// 7-Write a function to sort an array in ascending order.
function sortAscending(arr) {
    return arr.sort((a, b) => a - b); 
  }
  
  console.log(sortAscending([5, 12, 3, 8, 20])); 
  
// 8-Write a function to sort an array in descending order.
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  console.log(sortDescending([5, 12, 3, 8, 20])); 
  
// 9-Write a function to shuffle the elements of an array randomly.
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  console.log(shuffleArray([5, 12, 3, 8, 20]));
  
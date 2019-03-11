// ///////// интерполяционный поиск
// function search(arr, x) 
// { 
//     var low = 0; 
//     var high = arr.length - 1; 
 
//     while ((arr[low] < x) && (x < arr[high])) 
//     { 
//         var mid = low + ((x - arr[low])*(high - low))/(arr[high] - arr[low]); 
 
//         if (arr[mid] < x) 
//             low = mid + 1; 
//         else if (arr[mid] > x) 
//             high = mid - 1; 
//         else 
//             return mid; 
//     } 
 
//     if (arr[low] == x) 
//         return low; 
//     if (arr[high] == x) 
//         return high; 
//     return null; 
// } 
 
 
// var items = [ 2, 3, 5, 7, 11, 13, 17 ]; 
 
// console.log(search(items, 1)); 
// //print null 
// console.log(search(items, 7)); 
// //print 3 
// console.log(search(items, 19)); 
// //print null 
 
// // *** simplified speed test *** 
 
// var i = 0; 
// items = Array 
//     .apply(null, Array(10000)) 
//     .map(function () { return ++i }); 
// var count = 10000; 
 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     search(items, 7777); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 5 milliseconds




// ///////// бинарный поиск
// function search(arr, x) 
// { 
//     var i = 0; 
//     var j = arr.length; 
//     while (i !== j) 
//     { 
//         var m = Math.floor((i + j) / 2); 
//         if (x === arr[m]) 
//             return m; 
//         if (x < arr[m]) 
//             j = m; 
//         else 
//             i = m + 1; 
//     } 
//     return null; 
// } 
 
 
// var items = [ 2, 3, 5, 7, 11, 13, 17 ]; 
 
// console.log(search(items, 1)); 
// //print -1 
// console.log(search(items, 11)); 
// //print 3 
// console.log(search(items, 19)); 
// //print -1 
 
// // *** simplified speed test *** 
 
// var i = 0; 
// items = Array 
//     .apply(null, Array(10000)) 
//     .map(function() { return ++i }); 
// var count = 10000; 
 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     search(items, 7777); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 18 milliseconds




// ///////// быстрый линейный поиск
// function search(arr, x) 
// { 
//     var i = 0; 
//     var count = arr.length; 
//     arr.push(x); 
//     while (true) { 
//         if (arr[i] === x) { 
//             delete arr[count]; 
//             return i < count ? i : null; 
//         } 
//         i++; 
//     } 
// }  
 
 
// var items = [ 2, 3, 5, 7, 11, 13, 17 ]; 
 
// console.log(search(items, 1)); 
// //print null 
// console.log(search(items, 7)); 
// //print 3 
// console.log(search(items, 19)); 
// //print null 
 
// // *** simplified speed test *** 
 
// var i = 0; 
// items = Array 
//     .apply(null, Array(10000)) 
//     .map(function () { return ++i }); 
// var count = 10000; 
 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     search(items, 7777); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 313 milliseconds




// ///////// линейный поиск
// function search(arr, x) 
// { 
//     var i = 0; 
//     var count = arr.length; 
//     arr.push(x); 
//     while (true) { 
//         if (arr[i] === x) { 
//             delete arr[count]; 
//             return i < count ? i : null; 
//         } 
//         i++; 
//     } 
// } 
 
 
// var items = [ 2, 3, 5, 7, 11, 13, 17 ]; 
 
// console.log(search(items, 1)); 
// //print null 
// console.log(search(items, 7)); 
// //print 3 
// console.log(search(items, 19)); 
// //print null 
 
// // *** simplified speed test *** 
 
// var i = 0; 
// items = Array 
//     .apply(null, Array(10000)) 
//     .map(function () { return ++i }); 
// var count = 10000; 
 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     search(items, 7777); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 313 milliseconds




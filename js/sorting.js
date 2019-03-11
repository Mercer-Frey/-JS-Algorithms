// ////////////// быстрая сортировка
// // Time Complexity from O(n log(n)) to O(n^2) 
// // Space Complexity O(log(n)) 
 
// function doSort(items, fst, lst) { 
//     if (fst >= lst) 
//     return; 
//     var i = fst; 
//     var j = lst; 
//     var x = items[Math.floor((fst + lst) / 2)]; 
 
//     while (i < j) { 
//         while (items[i] < x) i++; 
//         while (items[j] > x) j--; 
//         if (i <= j) { 
//             var tmp = items[i]; 
//             items[i] = items[j]; 
//             items[j] = tmp; 
//             i++; 
//             j--; 
//         } 
//     } 
//     doSort(items, fst, j); 
//     doSort(items, i, lst); 
// } 
 
// function sort(arr) { 
//     var items = arr.slice(); 
//     doSort(items, 0, items.length - 1); 
//     return items; 
// } 
 
 
// var items = [4, 1, 5, 3, 2]; 
// var sortItems = sort(items); 
// // sortItems is [1, 2, 3, 4, 5] 
// console.log(sortItems); 
 
// // *** simplified speed test *** 
// var i = 0; 
// items = Array 
//     .apply(null, Array(200)) 
//     .map(function () { return ++i }); 
// var tmp = items[5]; 
// items[5] = items[6]; 
// items[6] = tmp; 
// var count = 10000; 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     sort(items); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 578 milliseconds







// ////////////// сортировка подсчетом
// // Time Complexity O(n+k) 
// // Space Complexity O(k) 
 
// function sort(arr) { 
//     var items = new Array(arr.length); 
 
//     //var min = Math.min.apply(Math, arr); 
//     //var max = Math.max.apply(Math, arr); 
//     var min = Number.MAX_VALUE; 
//     var max = Number.MIN_VALUE; 
//     for (var i in arr) { 
//         var x = arr[i]; 
//         if (x > max) max = x; 
//         if (x < min) min = x; 
//     } 
 
//     var counts = Array 
//         .apply(0, Array(max - min + 1)) 
//         .map(function () { return 0 }); 
 
//     for (var i in arr) { 
//         counts[arr[i] - min]++; 
//     } 
 
//     var total = 0; 
//     for (var i = min; i <= max; i++) { 
//         var oldCount = counts[i - min]; 
//         counts[i - min] = total; 
//         total += oldCount; 
//     } 
 
//     for (var i in arr) { 
//         var x = arr[i]; 
//         items[counts[x - min]] = x; 
//         counts[x - min]++; 
//     } 
//     return items; 
// } 
 
 
// var items = [4, 1, 5, 3, 2,]; 
// var sortItems = sort(items); 
// // sortItems is [1, 2, 3, 4, 5] 
// console.log(sortItems); 
 
// // *** simplified speed test *** 
// var i = 0; 
// items = Array 
//     .apply(null, Array(200)) 
//     .map(function () { return ++i }); 
// var tmp = items[5]; 
// items[5] = items[6]; 
// items[6] = tmp; 
// var count = 10000; 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     sort(items); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 1259 milliseconds







////////////// сортировка пузырьком
// Time Complexity O(n^2) 
// Space Complexity O(1) 
 
// function sort(arr) { 
//     var items = arr.slice(); 
//     for (var i = 0; i < items.length; i++) { 
//         for (var j = i + 1; j < items.length; j++) { 
//             if (items[j] < items[i]) { 
//                 var tmp = items[j]; 
//                 items[j] = items[i]; 
//                 items[i] = tmp; 
//             } 
//         }            
//     } 
//     return items;  
// } 
 
 
// var items = [4, 1, 5, 3, 2]; 
// var sortItems = sort(items); 
// // sortItems is [1, 2, 3, 4, 5] 
// console.log(sortItems); 
 
// // *** simplified speed test *** 
// var i = 0; 
// items = Array 
//     .apply(null, Array(200)) 
//     .map(function () { return ++i }); 
// var tmp = items[5]; 
// items[5] = items[6]; 
// items[6] = tmp; 
// var count = 10000; 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     sort(items); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 1470 milliseconds







// // ////////////// сортировка слиянием
// // Time Complexity O(n log(n))) 
// // Space Complexity O(n) 
 
// function sort(items) { 
//     var result = []; 
//     if (items.length === 1) 
//         return items; 
 
//     var lLeft = Math.floor(items.length / 2); 
//     var lRight = items.length - lLeft; 
//     var left = sort(items.slice(0, lLeft)); 
//     var right = sort(items.slice(lLeft, items.length)); 
 
//     var l = 0; var r = 0; 
 
//     while (l < lLeft && r < lRight) { 
//         if (left[l] < right[r]) { 
//             result.push(left[l++]); 
//         } else { 
//             result.push(right[r++]); 
//         } 
//     } 
 
//     while (l < lLeft) { 
//         result.push(left[l++]); 
//     } 
 
//     while (r < lRight) { 
//         result.push(right[r++]); 
//     } 
 
//     return result; 
// } 
 
 
// var items = [4, 1, 5, 3, 2];  
// var sortItems = sort(items); 
// // sortItems is [1, 2, 3, 4, 5] 
// console.log(sortItems); 
 
// // *** simplified speed test *** 
// var i = 0; 
// items = Array 
//     .apply(null, Array(200)) 
//     .map(function () { return ++i }); 
// var tmp = items[5]; 
// items[5] = items[6]; 
// items[6] = tmp; 
// var count = 10000; 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     sort(items); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 1867 milliseconds







// ////////////// порозрядная сортировка
// // Time Complexity O(nk) 
// // Space Complexity O(n+k) 
 
// function listToBuckets(items, cBase, i) { 
//     var buckets = Array 
//         .apply(null, Array(cBase)) 
//         .map(function () { return [] }); 
 
//     var pBase = Math.pow(cBase, i); 
//     for (var i in items) { 
//         var x = items[i];  
//         //Isolate the base-digit from the number 
//         var digit = Math.floor(x / pBase) % cBase; 
//         //Drop the number into the correct bucket 
//         buckets[digit].push(x); 
//     } 
 
//     return buckets; 
// } 
 
// function bucketsToList(buckets) { 
//     var result = []; 
 
//     for (var i in buckets) { 
//         var bucket = buckets[i]; 
//         //add the numbers in a bucket 
//         //sequentially to the returned array 
//         result = result.concat(bucket); 
//     } 
 
//     return result; 
// } 
 
// function sort(arr, cBase) { 
//     var maxVal = Math.max.apply(Math, arr); 
//     var i = 0; 
 
//     while (Math.pow(cBase, i) <= maxVal) { 
//         arr = bucketsToList(listToBuckets(arr, cBase, i)); 
//         i++; 
//     } 
 
//     return arr; 
// } 
 
 
// var items = [4, 1, 5, 3, 2]; 
// var sortItems = sort(items, 10) ; 
// // sortItems is [1, 2, 3, 4, 5] 
// console.log(sortItems); 
 
// // *** simplified speed test *** 
// var i = 0; 
// items = Array 
//     .apply(null, Array(200)) 
//     .map(function () { return ++i }); 
// var tmp = items[5]; 
// items[5] = items[6]; 
// items[6] = tmp; 
// var count = 10000; 
// var start = new Date(); 
 
// for (i = 0; i < count; i++) 
//     sort(items, 10); 
 
// var milliseconds = (new Date()) - start; 
 
// console.log(milliseconds); 
// // about 2756 milliseconds






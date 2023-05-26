const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 
// extraLargeArray timingFor: doublerInsert:O(n)  doublerAppend:O(n) timing: insert 957.527 ms append 4.1242 ms
// largeArray timingFor: doublerInsert:O  doublerAppend: timing: insert 9.3818 ms append 722.1 μs
// mediumArray timingFor: doublerInsert:  doublerAppend: timing:insert 208.6 μs append 177.1 μs
// smallArray timingFor: doublerInsert:  doublerAppend: timing: insert 48.8 μs append 91.9 μs
// tinyArray timingFor: doublerInsert:  doublerAppend: timing: insert 49.3 μs append 173.5 μs


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
// the pattern that i see as ive been changing the function is that the insert function stars off slower than the append function but the smaller we get the faster insert gets and after mediumArray it passes it in speed 

//for when the array is bigger its is faster to use the push.()(which is O(n) Runtime) method because its just pushing a number to the end of the array without moving all the array elements forward 1 like unshift() (which runtime is O(n^2)).
//but as we get smaller the unshift method take the lead in spead due to the runtime coomplexity being O(n^2)

function addToZero(arr){

    for(let i = 0; i < arr.length;i++){
        for(let j = 0; j < arr.length; j++){
            if (arr[i] + arr[j] === 0){
                 return true
             } 
        }
    }
    return false;
}
// i think the complexity of this one is O(n^2)

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));
console.log('________________________________');
console.log('________________________________');


function hasUniqueChars(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (i !== j && string[i] === string[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("asdf"));
// i think the complexity of this one is O(n^2)
console.log('________________________________');
console.log('________________________________');

function isPangram(string) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let lowercaseString = string.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        if (!lowercaseString.includes(alphabet[i])) {
            return false;
        }
    }

    return true;
}
// i think the complexity of this one is O(n)

console.log(isPangram("the quick brown fox jumps over he lazy dog!"));
console.log(isPangram("i like cats, but not mice"));


console.log('________________________________');
console.log('________________________________');


function findLongestWord(words){
    let longestWord = 0
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        if(word.length > longestWord){
            longestWord = word.length;
        }
    }
    return longestWord
}
// i think the complexity of this one is O(n)

console.log(findLongestWord(['connect',"barrel",'javascript']))
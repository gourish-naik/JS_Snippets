// Reverse an string
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString("hello")); // "olleh"


//Reverse an string by words
const reverseWords = str => str.split(' ').reverse().join(' ');
console.log(reverseWords("hello world")); // "world hello"

// Count the sting characters 
const countCharacterFrequency = str => {
    const freqObj = str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    const freqArray = Object.entries(freqObj).sort((a, b) => b[1] - a[1]);

    return { freqObj, freqArray };
};

console.log(countCharacterFrequency("hello"));
/*
{
  freqObj: { h: 1, e: 1, l: 2, o: 1 },
  freqArray: [ [ 'l', 2 ], [ 'h', 1 ], [ 'e', 1 ], [ 'o', 1 ] ]
}
*/


//Sort the string by frequency of characters
const sortByFrequency = str => {
    const freq = str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    return str.split('').sort((a, b) => freq[b] - freq[a] || a.localeCompare(b)).join('');
};

console.log(sortByFrequency("banana")); // "aaannb"

//Sort string by alphabetically
const sortAlphabetically = str => str.split('').sort().join('');
console.log(sortAlphabetically("hello")); // "ehllo"

//sort an object

const obj = { b: 2, a: 1, c: 3 };

const sortedKeys = Object.keys(obj).sort().reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
}, {});

console.log(sortedKeys); // { a: 1, b: 2, c: 3 }

const sortedValues = Object.entries(obj)
    .sort(([, v1], [, v2]) => v1 - v2)
    .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

console.log(sortedValues); // { a: 1, b: 2, c: 3 }

// Largest num in array
const largestNumber = arr => Math.max(...arr);
console.log(largestNumber([3, 7, 2, 9, 5])); // 9

//Min and Max of array 
const maxValue = arr => Math.max(...arr);
const minValue = arr => Math.min(...arr);

console.log(maxValue([3, 7, 2, 9, 5])); // 9
console.log(minValue([3, 7, 2, 9, 5])); // 2

//Two sum

const twoSum = (arr, target) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(arr[i], i);
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] (since 2 + 7 = 9)

//Reduce 

//array
const sumArray = arr => arr.reduce((acc, num) => acc + num, 0);

console.log(sumArray([1, 2, 3, 4])); // 10

//obj
const sumObjectValues = obj => Object.values(obj).reduce((acc, num) => acc + num, 0);

console.log(sumObjectValues({ a: 5, b: 10, c: 15 })); // 30

//Print duplicates and Unique in array

const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);
const findUniques = arr => [...new Set(arr)];

console.log(findDuplicates([1, 2, 3, 4, 2, 5, 1])); // [2, 1]
console.log(findUniques([1, 2, 3, 4, 2, 5, 1])); // [1, 2, 3, 4, 5]

//Frequency of elemnrnts in array
const frequencyCount = arr => arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

console.log(frequencyCount([1, 2, 3, 2, 1, 3, 3]));
// { '1': 2, '2': 2, '3': 3 }


//Sort() an array ASE - DES
const ascendingSort = arr => arr.slice().sort((a, b) => a - b);
const descendingSort = arr => arr.slice().sort((a, b) => b - a);

console.log(ascendingSort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]
console.log(descendingSort([3, 1, 4, 1, 5])); // [5, 4, 3, 1, 1]


// Bubble sort

const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

console.log(bubbleSort([5, 3, 8, 2, 4])); // [2, 3, 4, 5, 8]


//Quick sort

const quickSort = arr => {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.filter(el => el < pivot);
    const right = arr.filter(el => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([5, 3, 8, 2, 4])); // [2, 3, 4, 5, 8]

//Reverse an array
const reverseArray = arr => arr.slice().reverse();

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

// anagram or not
const isAnagram = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
};

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

//Palindrome
const isPalindrome = str => {
    return str === str.split('').reverse().join('');
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

//ovwels count
const countVowels = str => {
    return str.match(/[aeiou]/gi)?.length || 0;
};

console.log(countVowels("hello")); // 2 ('e' and 'o')
console.log(countVowels("xyz")); // 0


//String expansion and compression
const transformString = str => {
    return /\d/.test(str)
        ? str.match(/[a-z]\d+/gi).map(chunk => chunk[0].repeat(parseInt(chunk.slice(1)))).join('')
        : str.match(/(.)\1*/g).map(group => `${group[0]}${group.length}`).join('');
};

console.log(transformString("a1b3c2")); // "abbbcc" (expands)
console.log(transformString("abbbcc")); // "a1b3c2" (compresses)

//Linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) this.head = newNode;
        else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = newNode;
        }
    }

    print() {
        let current = this.head, result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result);
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // [10, 20, 30]


//DFS and BFS in JavaScript

//DFS
const dfs = (graph, start, visited = new Set()) => {
    if (!visited.has(start)) {
        console.log(start);
        visited.add(start);
        graph[start].forEach(neighbor => dfs(graph, neighbor, visited));
    }
};

const graph = { A: ["B", "C"], B: ["D", "E"], C: ["F"], D: [], E: [], F: [] };
dfs(graph, "A"); // Traverses depth-first

//BFS
const bfs = (graph, start) => {
    let queue = [start], visited = new Set();
    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);
            queue.push(...graph[node]);
        }
    }
};

bfs(graph, "A"); // Traverses breadth-first

//Object to Array & Array to Object
const obj1 = { a: 1, b: 2, c: 3 };

// Object to array
const objToArray = Object.entries(obj1);
console.log(objToArray); // [['a', 1], ['b', 2], ['c', 3]]

// Array to object
const arrayToObj = Object.fromEntries(objToArray);
console.log(arrayToObj); // { a: 1, b: 2, c: 3 }


//Deep copy
const originalObj = { a: 1, b: { c: 2 } };
const deepCopyObj = JSON.parse(JSON.stringify(originalObj)); // Deep copy

const originalArr = [1, 2, [3, 4]];
const shallowCopyArr = [...originalArr]; // Shallow copy
const deepCopyArr = JSON.parse(JSON.stringify(originalArr)); // Deep copy

//Flat an array
const nestedArr = [1, [2, [3, 4], 5], 6];

// Flatten an array
const flatArray = nestedArr.flat(Infinity);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

// Nest an array (grouping every two items)
const nestArray = (arr, size) => arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
console.log(nestArray(flatArray, 2)); // [[1, 2], [3, 4], [5, 6]]

//Flat using recursion
const flattenRecursive = arr => {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenRecursive(val)) : acc.concat(val), []);
};

console.log(flattenRecursive([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]

//Trick JSON
const flattenJSON = arr => JSON.parse("[" + JSON.stringify(arr).replace(/[\[\]]/g, "") + "]");

console.log(flattenJSON([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]


//GroupBy in Object & Array
const groupBy = (arr, key) => {
    return arr.reduce((acc, obj) => {
        acc[obj[key]] = acc[obj[key]] || [];
        acc[obj[key]].push(obj);
        return acc;
    }, {});
};

const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

console.log(groupBy(data, "age"));
/*
{
  '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
  '30': [ { name: 'Bob', age: 30 } ]
}
*/


const groupByValue = (arr, fn) => {
    return arr.reduce((acc, value) => {
        const key = fn(value);
        acc[key] = acc[key] || [];
        acc[key].push(value);
        return acc;
    }, {});
};

console.log(groupByValue([1, 2, 3, 4, 5, 6], x => x % 2 === 0 ? "even" : "odd"));
/*
{ odd: [ 1, 3, 5 ], even: [ 2, 4, 6 ] }
*/


//Callback,
const greet = (name, callback) => {
    console.log(`Hello, ${name}!`);
    callback();
};

greet("Alice", () => console.log("Callback executed!"));

//Apply

function introduce(language, country) {
    console.log(`${this.name} speaks ${language} and lives in ${country}.`);
}

const person = { name: "Bob" };
introduce.apply(person, ["English", "USA"]);

//Bind

const boundFunction = introduce.bind(person, "French", "Canada");
boundFunction(); // "Bob speaks French and lives in Canada."


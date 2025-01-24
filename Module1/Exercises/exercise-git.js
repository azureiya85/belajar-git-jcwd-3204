// Write a code to display the multiplication table of a given integer. Example number 9

let num = 9;
let i = 1;
let table = "";

if (num >= 1 && num <= 20) {
  while (i <= 10) {
    table += `${num} x ${i} = ${num * i} \n`;
    i++;
  }
  console.log(table);
} else {
  console.log("Invalid number");
}

// Write a code to check whether a string is a palindrome or not. Example: madam

const word = "madam";
let reversedWord = "";
const reversed = word.split("").reverse().join("");
const isPalindrome = word === reversed;

console.log(isPalindrome ? "Palindrome" : "Bukan Palindrome");

// Write a code to convert cm to km. Example: 1000 cm = 1 km

let cm = Math.floor(Math.random() * 1000);
let km = cm / 1000;

console.log(`${cm} cm = ${km} km`);

// Write a code to format number as currency (IDR). Example: 10000 => Rp 10.000
//
const idr = 10000;
const format = `Rp ${idr.toLocaleString("id-ID")}`; // Rp 10.000
console.log(format);

// Write a code to remove the ﬁrst occurrence of a given “search string” from a string. Example: string = "Hello World" search string = "World" => Hello

const string = "Hello World";
const search = "World";
const newString = string.replace(search, "");
console.log(newString);

// Write a code to capitalize the ﬁrst letter of each word in a string. Example: string = "hello world" => Hello World

const string2 = "hello world";
const newString2 = string2.replace(/(^\w)|(\s\w)/g, (a) => a.toUpperCase());
console.log(newString2);

// Write a code to swap the case of each character from string. Example QuIcK BrOwn FoX => qUiCk bRoWn fOx

const string3 = "QuIcK BrOwn FoX";
const newstring3 = string3
  .replace(/[a-z]/g, (a) => a.toUpperCase())
  .replace(/[A-Z]/g, (a) => a.toLowerCase());
console.log(newstring3);

// Write a code to ﬁnd the largest of two given integers.Example: 42, 27
//
let a = 42;
let b = 27;
const max = Math.max(a, b);
console.log(max);

// Write a conditional statement to sort three numbers. Example: 42, 27, 9 --> 9, 27, 42
//
const a1 = 42;
const b1 = 27;
const c1 = 9;
const sorted = [a1, b1, c1].sort((a, b) => a - b);
console.log(sorted);

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type. Example "hello" => 1
//
const string4 = "hello";
const type = typeof string4;
const data = type === "string" ? 1 : 2;

console.log(data);

// Write a code to change every letter "a" into "*" from a string of input. ExampleL An apple a day keeps a doctor away => *n *pple * d*y keeps the docotor *w*yield

const string5 = "An apple a day keeps a doctor away";
const string6 = string5.replace(/a/g, "*");
console.log(string6);

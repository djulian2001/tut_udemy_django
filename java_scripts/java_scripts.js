alert("hello world!")
// comment
// basic data types
// all numbers
10 int
20.2 floating point
// strings
"hello world"
"10"
// booleans
true
false
// undefined and null
undefined
null

clear()


// number operations
2+2
5-1
3*2
4/5
2 ** 4
16 % 15

// string operations
"Django is cool"
"Django" + " " + "is super cool"
"Django".length
// white spaces count
"x x x".length
// escape characters
\n // new line
\t // tab
\ // escape ""'s
"hello world, \"hello back!\""

// string index
"hello"[0]  // 'h' zero indexed

// vars
var varName = value;

// use camelCase
var bankAccountMyBank = 100;
var deposit = 500;

var total = bankAccountMyBank + deposit
total  // would print 600

// built in methods
alert() // creates a popup in a browser
console.log("output to console")
prompt("") // asks for input

// operators
true
false

// comparison
// greater than
3 > 2; // true
2 > 3; // false
2 > 2; // false
1 >= 1; // true
// less than
3 < 2; // false
2 < 3; // true
2 < 2; // false
2 <= 2; // true

// equality
2 == 2  // true
"2" == 2 // true  using type corestion
"2" === 2 // false, checking value and data type
Number("2") === 2 // true

// inequality
2 != "2" // false
2 !== "2" // true
2 !== Number("2") // false

// boolean equality
true == 1   // true
false == 0  // true
true === 1  // false
false === 0 // false

null == undefined  // true  ... what!?
null === undefined // false
// NaN, not a number, ment to catch bad calculations probably from input errors
// because of the following, using isNaN() will check if a variable is type NaN
NaN == NaN	// false  ... what is NaN?
NaN == null // false

// logical operators
// AND
1 === 1 && 2 === 2;  // true and true is true
1 === 1 && 2 === "2";  // true and false is false
// OR
1 === 1 || 2 === 1; // true or false is true
// NOT
(1===1) // true
!(2===2) // false

// control flow
// if
if (true) {}
// if else
if (true) {} else {}
// if else if else
if (true) {} else if (true) {} else {}

// incrementing values:
num = num +1
num += 1
num++

// while loops
while (true) {}

// for loops
for ( statement1; statement2; statement3 ) {}
statement1 executed before for loop starts, init the state of the loop
statement2 defines the condition of running the loop, continue to loop?
statement3 executed after each loop ends, state at the end of the loop.

for (var i = 0; i < Things.length; i++) {
	Things[i]
}
for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
}


// functions
// provide default values:
// function function_name(argument1="hello",argument2="world") {
var my_g = "global"

function function_name(argument1,argument2) {
	// body...
	console.log( argument1+" "+argument2 )
	// return resutls using the return keyword
	my_g = "not so global" // only in here = this

	return argument1+" "+argument2
	var scoped_to_only_this_function = "just me"
}
my_g // is still orig value.

// functions with global variables:

// calling the function
function_name("hello","world!")

// interesting behavior, this returns the function:
function_name


// arrays
// order matters
// zero index
// values can be mixed, not just strings
// arrays have methods
// good resource for java script "Mozilla Developer Network"
var contries = ["USA","Germany","China"]
// OR format
var contries = ["USA",
				"Germany",
				"China"];
// arrays have index
contries[0]  // output USA
contries[2] = "France";

// immutable
// mutable

array methods:
push and pod methods
myArray.pop() // defaults to the last element
myArray.push("adds_this")
arrInArr = [[1,2,3],[4,5,6],[7,8,9]];
arrInArr.length;  // 3
for ( var i = 0; i < arrInArr.length ; i++ ) {
	console.log(arrInArr[i]);
}
// not a great way
for (letter of arrInArr){
	var i=0;
	console.log(arrInArr[i]);
	i++;
}
// getting cleaner code...
for (letter of arrInArr){
	console.log(letter);
}
// some sugar scripting 
arrInArr.forEach(alert);  // watch your caps on the 'E'
arrInArr.forEach(console.log);
// Using arrays with functions:
function addWord(value, word="is cool!"){
	console.log( value + " " + word );
}
funArray = [
	['So','what'],
	['Love','that hard!'],
	['My'],
	['Bill','me later!']
];

funArray.forEach(addWord);

// objects
hash-tables
key value paring, also called a dictionary
the typical JS Object is in the form:
var Object = {key1:"value one",key2:"value two",key3:"etc..."}

access to the values is through the keys.
There are many methods that can be used with objects

Keys are unique, BUT error silently or not at all...
For instances:
my_obj = { key:"haha", key:"baba" } // will be:
{key: "baba"}
//	Note the first key was overwritten, with NO errors reported.

// example structures:
// 1 dimentional dictionary:
car_info = {make:"toyota",year:"1889",miles:12345}

// more complex object example:
news_item = {
	title:"A full moon",
	authors:["Brian Moore","Jack Horase"],
	pages: 421,
	publisher_info: {
		company:"mill house",
		address:"21 tulane st, red 21234 TX",
		division:"access reading" },
	in_print: true,
	year: 1999 };

// and objects can contain functions:

my_fun_obj = {
	key1: "a string",
	key2: true,
	key3: 123454,
	key4: 67890,
	list1: [],
	obj1: {},
	fun1: function(){ alert( "I am a function in an object" ) },
	fun2: function( value ){ console.log( value +" "+this.key1 ); },
	fun3: function(){
		if (this.key2 === true){
			for( i = this.key3%5; i >= 0; i-- ){
				value = this.key4 / i+1;
				this.list1.push(value); } } },
	fun4: function(){ for ( value of this.list1 ){ this.fun2( value ) } } }

// retrive values from your objects:
object_name["key"]  // will output the value that corespondes to the key

// print to the console full object:
console.dir( news_item );

news_item["title"]  // will out: "A full moon"

// assign new values to the object with '='
news_item["title"] = "A new moon"  // will replace: "A full moon"

// special looping with the 'in'

for ( key in news_item ){
	// code block
	// order is not reserved!
	console.log( key );
	console.log( news_item[key] ); }




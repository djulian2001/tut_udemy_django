// functions:

// 1 - write a function called sleepIn
// 		takes in 2 boolean parameters:
// 		weekday, vacation
// 	functional behavior, function returns true if 1 its a weekend or vacation day

function sleepIn( weekday, vacation ) {
	if ( vacation===true ) {
		return true;
	}else if ( weekday===false ) {
		return true;
	}else {
		return false;
	}
	// return ( !weekday || vacation )
}


// 2 - function monkeyTrouble()
//		aSmile and bSmile
// 	function behavior, takes in 2 attributes, if both === return true
function monkeyTrouble( aSmile, bSmile ) {
	if (aSmile===bSmile){
		return true;
	} else {
		return false;
	}
	// return ( aSmile && bSmile ) || ( !aSmile && !bSmile )
}

// 3 stringTimes
//		int n (non-negative) and string word
// function behavior, input of 1 int and 1 string, append string value together the number of times the int is.
function multiAppend( n, word ) {
	function addThis( newWord ) {
		return newWord = word + newWord;
	}

	if ( Number.isInteger( n ) && n > 0 ){
		var aWord = '';
		
		for (var i = n - 1; i >= 0; i--) {
			aWord = addThis( aWord );
		}
		return aWord;
	} else {
		return false;
	}

	// var returnStr = '';
	// var i = 0;
	// while(i<n){
	// 	returnStr += word
	// 	i++
	// }
	// return returnStr

}
// 4 lucky sum
//  	takes in: a b c
// 	function behavior, sum values, break if an input value is 13
function luckySum( a, b, c ) {
	var sum = 0;
	function check( value ) {
		if ( value != 13 && Number.isInteger( value ) == true ) {
			return true;
		}else{
			return false;
		}
	}
	if ( check( a ) ) {
		sum = a;
		if ( check( b ) ){
			sum = b + sum;
			if ( check( c ) ){
				sum = c + sum;
			}
		}
	}
	if ( sum != 0) {
		return sum;
	} else {
		return false;
	}
}

// 5 caughtSpeeding
// 		speed and birthday
// 	function behavior, max speed 60[0], 61-80[1], 81+[2], add 5 to max speed if birthday true

function caughtSpeeding( speed, birthday ) {
	maxSpeed = 60;
	if ( birthday == true ) {
		maxSpeed = 60 + 5;
	}
	if ( speed <= maxSpeed ) {
		return 0;
	} else if ( speed > maxSpeed && speed <= ( maxSpeed + 20 ) ) {
//  } else if ( maxSpeed < speed <= ( maxSpeed + 20 ) ) 
		return 1;
	} else {
		return 2;
	}
}

// bonus  makeBricks
// 		one	five goal
// check the sum of one and five >= goal, can the combo of bricks make the goal cant break the bricks.
// correction:
// g  	one five
// 1	1	-		g%5
// 2	2	-
// 3	3	-
// 4	4	-
// 5	5	1


function makeBricks( one, five, goal ) {
	if (Number.isInteger(one) && Number.isInteger(five) && Number.isInteger(goal) ) {
		
		return one + five*5 >= goal && goal%5 >= 0 && goal%5 - one <= 0;
		// // check low case and ones
		// if( one >= goal ){
		// 	return true;
		// }
		// // enough bricks?
		// if ( one + five * 5 ){	
		// 	// check five's can cover it alone
		// 	if( goal <= five * 5 && goal >= 5 ){
		// 		return true;
		// 	}
		// 	// check enough one's to cover diff
		// 	if ( goal%5 - one <= 0 ){
		// 		return true;			
		// 	}
		// }	
	} 
	
	// return false
	
}

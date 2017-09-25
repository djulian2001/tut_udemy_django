// first and last name start with same letter
// age between 20-30
// 170 centimeters plus tall
// last letter of pets name is y

var first_name = prompt("enter first name:")
var last_name = prompt("enter last name")
var age = prompt("enter age:")
var height = prompt("enter height (cm):")
var pet_name = prompt("enter pets name:")

var pet_name_len = pet_name.length-1

if (first_name[0]===last_name[0]) {
	if (age>=20 && age<=30) {
		if (height>170) {
			if ( pet_name[pet_name_len] == "y" || pet_name[pet_name_len] == "Y" ) {
				console.log("Welcome to the team!")
			}
		}
	}
}
else
{
	console.log("Your data has been documented.")
}
// objects exercise
var employees = []
var base_employee0 = { name: "Joey Jones", job: "web dev", age: 25, dept_name: "finance"}
var base_employee1 = { name: "Mathew Jones", job: "jr web dev", age: 21, dept_name: "finance"}
var base_employee2 = { name: "Billy Bob Jones", job: "sr web dev", age: 33, dept_name: "finance"}
var base_employee3 = { name: "Kelly Clarks Jones", job: "dba", age: 53, dept_name: "finance"}


var employees = [ base_employee0, base_employee1, base_employee2, base_employee3 ]

console.log(employees)

// problem 1
function name_length( name ) {
	return name.length
}
// problem 2
function alert_details( employee ) {
	alert( 
		"name is " + employee["name"] + "!\n" +
		"job is " + employee["job"] + "!\n" +
		"age is " + employee["age"] + "!\n" +
		"department is " + employee["dept_name"] + "!\n" +
		"there are " + name_length(employee["name"]) + " letters in name" );
}

// problem 3
function last_name( name ) {
	
	names = name.split(" ");
	return names[names.length-1];

}


for ( employee in employees ){
	console.log( name_length( employees[employee]["name"] ) );
	// alert_details( employees[employee] );
	console.log( last_name( employees[ employee ]["name"] ) );
}
// using the prompt method
var students = ["Dave","Joe","Suzzy","Camilla"]
var  no_quit = true ;
// excepts commands
// methods
function add(name) {
	students.push(String(name));
}

function remove_name(name){
	// students.pop(name)
	index = students.indexOf(name);
	if( index > -1 ){
		students.splice(index,1);
	}
}

function display(){
	for ( name of students ){
		console.log(name)
	}
}
// command 'typed in'

function clear(){
	students = []
	// for ( name of students ){
	// 	remove_name( name )
	// }
}


var start = prompt("Start app, (y)es or (n)o?")
if( start==='y' || start==='yes' ){
	while ( no_quit === true ){
		// var choice = prompt("Command Please: (a)dd, (r)emove, (s)how, (q)uit");
		// var choice = ;
		switch( String( prompt("Command Please: (a)dd, (r)emove, (s)how, (q)uit") ) ){
		 	case 'add':
		 	case 'a':
		 		add( prompt("New name?") );
		 		break;
		 	case 'remove':
		 	case 'r':
		 		remove_name( prompt("Name to remove?") );
		 		break;
		 	case 'show':
		 	case 's':
		 		display();
		 		break;
		 	case 'quit':
		 	case 'q':
		 		no_quit = false;
		 		clear();
		 		break;
		 	default:
		 		alert("Wrong! (a)dd, (r)emove, (s)how, (q)uit");
		}

	}
}
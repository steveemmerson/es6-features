// function sayHello (name = 'Steve') {
// 	console.log('Hello, ' + name + '!');
// }

// sayHello();

function greetUser (user = {name: "Anonymous"}) {
	console.log('Hello, ' + user.name + '!');
}

greetUser();
greetUser({name: "Steve"});
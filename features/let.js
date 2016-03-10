for (let i = 0; i < 3; i++) {
	console.log(`for loop: i = ${i}`)
}

function genCallback () {
	let name = 'Steve';
	return function () {
		console.log(`Hello ${name}`)
	}
}
genCallback()();
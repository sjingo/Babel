class Test {
	constructor(name = 'Stefan', age = 41) {
		this.name = name;
		this.age = age;
	}

	get age() {
		return this.age;
	}

	get name() {
		return this.name;
	}

	static sayName() {
		console.log(this.name);
	}
}
const test = new Test();
console.log(test);

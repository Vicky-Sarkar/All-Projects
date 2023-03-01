
// Problem 1. 
Animal.prototype.makeSound = function () {
	return ("Animal is making a sound")
}

function Animal(name, type) {
	this.name = name
	this.type = type
}

Mammal.prototype.makeSound = function () {
	return ("Mammal is making a sound")
}

Object.setPrototypeOf(Mammal.prototype, Animal.prototype)
function Mammal(name, type, hasFur) {
	Animal.call(this)
	this.name = name
	this.type = type
	this.hasFur = hasFur
}


Dog.prototype.makeSound = function () {
	return ("Woof Woof!")
}

Object.setPrototypeOf(Dog.prototype, Mammal.prototype)
function Dog(name, type, hasFur, breed) {
	Mammal.call(this)
	this.name = name
	this.type = type
	this.hasFur = hasFur
	this.breed = breed
}
//name(string) health(integer) attackPower(integer)
class Character {
	constructor(name, health, attackPower) {
		this.name = name
		this.health = health
		this.attackPower = attackPower
	}
	attack(attackPower) {
		this.healt = health
	}

	isAlive(health) {
		this.health = health
		return health < 0
	}
}
//weapon(string) armor(integer)
class Warrior extends Character {
	constructor(name, health, attackPower, weapon, armor) {
		super(name, health, attackPower)
		this.weapon = weapon
		this.armor = armor
	}
	attack() {
		this.attackPower += 10
	}

	defend() {
		this.health += 10
	}
}

export { Dog, Mammal, Animal, Character, Warrior }

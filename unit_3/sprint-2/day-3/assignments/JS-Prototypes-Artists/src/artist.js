function Artist(name, skill, profession) {

	this.name = name;
	this.skill = skill;
	this.profession = profession;
	Object.setPrototypeOf(artistsObject, this)
}
Artist.prototype.getProfession = function (x) {
	return this.profession
}

Artist.prototype.print = function (x) {
	return `I am ${this.name}`
}
// class Artist {
// 	constructor(name, skill, profession) {
// 		this.name = name;
// 		this.skill = skill;
// 		this.profession = profession;
// 	}
//}



var artistsObject = {}


// Do not change this
export { Artist, artistsObject };

// const fs = require("fs");
//
// fs.copyFileSync("file1.txt", "files2.txt");

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log("My Super Hero Name: " + mySuperheroName);
console.log("My Super Villain Name: " + mySuperVillainName);

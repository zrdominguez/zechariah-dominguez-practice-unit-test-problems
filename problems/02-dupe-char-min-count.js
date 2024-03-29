/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
 const copy = string.split('');
 let obj={};
 copy.forEach(letter => {
	obj[letter] = !obj[letter] ? 1 : obj[letter] + 1;
 })
 return obj;
}

function duplicateCharMinCount(string, minCount) {
	const countLetters = countCharacters(string);
	let result = [];
	for(const [key, val] of Object.entries(countLetters)){
		if(val >= minCount) result.push(key);
	}
	return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;

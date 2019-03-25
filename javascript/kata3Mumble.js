function accum(s) {
	let mumm = "";   
	for (var i = 0; i < s.length; i++) {
		mumm += s[i].toUpperCase();
		for (j = 0; j <= i; j++) {
			mumm += s[i].toLowerCase();
		}
		if (i !== s.length - 1) {
			mumm += "-"
		}
	}
	return mumm;
}
// find a function that takes a letter and turns it into the capital letter of itself
// ALSO find a function that takes a letter and turns it into a lower case letter of itself
// find a way to add i lowercase letters to the end of the first letter.
// at the end of each loop concatenate a - onto the end of the string if it's not the end
// return the new string we made

var myNam = "Sarah"

console.log(accum("butts"));

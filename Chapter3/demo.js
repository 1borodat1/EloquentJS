function getRandom(max) {
	if(!max) {
		max = 100;
	}
	return Math.floor(Math.random() * max);
}

function getRandomString() {
	let text = "";
	let possible = "abcdefghijklmnopqrstuvwxyz";
	let possibleLength = possible.length;
	for (let i = 0; i < 26; i++) {
		text += possible.charAt(getRandom(possibleLength));
	}
	return text;
}

function min() {
	consoleClear();
	let lenght = getRandom(), min = 0, array = [];
	for (let i = 0; i <= lenght; ++i) {
		let number  = getRandom();
		if(min > number){
			min = number;
		}
		array[i] = number;
	}
	console.log("min number {0} from [{1}], array lenght is {2}",min, array.toString(),lenght );
}

function countChar() {
	let text = getRandomString(), countChar= 0;
	let char = 97 + getRandom(26);//a
	for (let i = 0; i < text.length; ++i) {
		if (text[i] == char)
			++countChar;
	}
	console.log("char count \"{0}\" {0} of \"{2}\" is {2}", char, text, countChar );
}

function isEven(n) {
	if (n == 0) return true;
	else if (Math.abs(n) == 1) return false;
	else return isEven(Math.abs(n - 2));
}

function consoleClear() {
    console.clear();
}
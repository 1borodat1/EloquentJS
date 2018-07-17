function getRandom(max) {
	if(!max) {
		max = 100;
	}
	return Math.floor(Math.random() * max);
}

function getRandomString(lenght) {
	let text = "";
	let possible = "abcdefghijklmnopqrstuvwxyz";
	let possibleLength = possible.length;
	for (let i = 0; i < lenght; i++) {
		text += possible.charAt(getRandom(possibleLength));
	}
	return text;
}

function minimum() {
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
	consoleClear();
	let text = getRandomString(26), countChar= 0;
	let char = getRandomString(1);//a
	for (let i = 0; i < text.length; ++i) {
		if (text[i] == char)
			++countChar;
	}
	console.log("char count \"{0}\" {0} of \"{2}\" is {2}", char, text, countChar );
}

function isEven(n) {
	consoleClear();
	if (n == 0) return true;
	else if (Math.abs(n) == 1) return false;
	else return isEven(Math.abs(n - 2));
}

function consoleClear() {
    console.clear();
}
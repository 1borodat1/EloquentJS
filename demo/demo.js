function chessBoard() {

	let hashSymbol = '#', spaceSymbol = ' ', n=9;
	for (let i = 1; i <= n; ++i) {
		let output = '', isHashStart = i % 2;
		while (output.length !== n) {
			if(isHashStart){
				output += output.length % 2 ? spaceSymbol : hashSymbol;
			} else{
				output += output.length % 2 ? hashSymbol : spaceSymbol;
			}
		}
		console.log(output);
	}
}

function repeatSymbol() {
    consoleClear();
    let repeat = '#';
    for (let i = 1; i <= 11; ++i) {
        console.log(repeat.repeat(i));
    }
}

function fizzBuzz() {
    consoleClear();
    for (let i = 1; i <= 100; ++i) {
        let str = "";
        if (i % 3) {
            str += "Fizz";
        } else if (i % 5) {
            str += "Buzz";
        } else {
            str += i;
        }
        console.log(str);
    }
}

function consoleClear() {
    console.clear();
}
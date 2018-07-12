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
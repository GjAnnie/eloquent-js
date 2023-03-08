const hashTriangule = () => {

	let contador = [1,2,3,4,5,6,7];

	let hs = "#";

	let salto = "<br>";

	for(i = 0; i < contador.length + 1; i++) {

		document.write(hs.repeat([i]) + salto);

	}

}

const fizz_and_buzz = () => {

	let numeros = 100;

	for(i = 1; i <= numeros; i++) {

		 if (i % 3 == 0 && i % 5 == 0) {

 			document.write("FizzBuzz" + i + "<br>");

 		}

 	 	else if(i % 3 == 0) {

 			document.write("fizz" + i + "<br>");

 		}

 		else if(i % 5 == 0) {


 			document.write("buzz" + i + "<br>");

 		}

	}
}


const chessboard = (size) => {

	let hs = "# # # # ",

	hs2 = " # # # #"

	for( let i = 1; i <= size; i++) {

		if(i % 2 == 0) {

			console.log(hs + '\n')

		}

		 else if(i % 2 != 0) {

			console.log(hs2 + '\n')

		}

	}

	//use this function with 8 like parameter 
 
}

const Dynamic_Chessboard = (size) => {

	for(g = 1; g <= size; g++) {

		let chest = "";

		if(g % 2 != 0) {

			for(j = 1; j <= size; j++) {

				if(j % 2 != 0) chest += " "
				else chest += "#";

			}	

			console.log(chest);

		} 

		else {

			for(h = 1; h <= size; h++) {

				if(h % 2 != 0) chest += "#"
				else chest += " ";

			}

			console.log(chest);

		}

	}

}	


const tellANumber = () => {

 	function Minimun(num1,num2) {

	 resultado = Math.min(num1,num2);

	return resultado;

	}	

 	let number1 = prompt("dime un numero");

 	let number2 = prompt("dime otro numero");

 	if(number1 != Number && number2 != Number) {

 	parseInt(number1);

 	parseInt(number2);

 	document.write("el minimo  es" + Minimun(number1,number2));
 		
	 }

}

const Bcounting = () => {

	let count = 0;

	let work = prompt("dime tu palabra");

	for(letter of work){

		if(letter.includes("B"))count += 1;
	}

	console.log("la palabra tiene B mayuscula:" + count +"veces");	



}

const countingUpperCase = (work,letter) => {

	let count = 0;

	for(Upper of work) {

		if(Upper == letter.toUpperCase()) count +=1;	
	}

	console.log(`la letra ${letter} se encuentra ${count} numero de veces`);
}



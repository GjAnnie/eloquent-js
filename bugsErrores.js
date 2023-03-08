const multiplicacionPrimimitiva = () => {

	let number1 = Math.round(Math.random()*10 + 1),

	number2 = Math.round(Math.random()*10 + 1),

	ramdon = Math.round(Math.random()*10 + 1);

	if(ramdon == 2 || ramdon == 10 ) return number1 * number2;

	else throw new Error("intente de nuevo");


	 

}

const handlerOperation = (funcion) => {

	try{

		console.log(funcion());

	}

	catch(e) {

		console.log("Fallo Unidad Multiplicadora" + e);

		handlerOperation(funcion);

	}	

}

const saludo = (nombre = "desconocido") => "hola " + nombre;

const callback = (cb) => cb();



const caja = {

	bloqueada: true,

	desbloquear() { this.bloqueada = false; },

	bloquear() { this.bloqueada = true; },

	_contenido: [],

	get contenido() {

	if (this.bloqueada) throw new Error("Bloqueada!");

	return this._contenido;
	
	}
};


const withUnlokedBox = () => {

	
	
}

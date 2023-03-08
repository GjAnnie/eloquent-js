const arrayX2ToArray = (array) => {

	 arrayToReduce = array.reduce((newArray,n) => newArray.concat(n));

	return arrayToReduce;

}

let matriz = [[1,2,3],[4,5,6],[7,8,9]];

let array = [1,3,5,8,0,12]



const everyWithLoop = (array,method) => {

	for(element of array) if(!method(element)) return false

	return true;

}

const everyWithSome = (array,cb) => {

	let element = [];

	for(let i  = 0; i < array.length; i++) {

		element[0] = array[i];

		if(!element.some(cb)) return false;

	}

	return true;
 		
}

console.log(everyWithSome(array,n => n < 10));






 

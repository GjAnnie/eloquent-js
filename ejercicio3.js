	const countArray = (start,end) => {

	let arr = [start];

	let count = start;

	for(let i = start; i < end; i++) {

		count += 1;

		arr.push(count);

	}


	return arr;

}


const sum = (array) => {

	let resultado = 0;

	for(let i = 0; i < array.length; i++) {

		resultado += array[i];  

	}

	return resultado;

}




const reversedArray = (oldArray) => {

	let newArray = [];

	for(let i = oldArray.length-1; i >= 0; i--) {

		newArray.push(oldArray[i])

	}

	console.log(oldArray);

	console.log(newArray);

}

const reversedArrayInPlace = (array) => {

	console.log(array);

	let count = 0;

	for(let i = array.length-1; i >= 0; i--) array.push(array[i]);
	
	for(let g = 1; g <= array.length; g++) array.shift(array[g]);

	console.log(array);

}

const arrayToList = (array) => {

	let count = 0;

	let Objectlist = {

		value:null,
		rest:null
		

	};

	let OldObjectlist = null;

	let newObjectList = null;

	for(let i = 0; i < array.length; i++) {

		if(i == 0){

			Objectlist.value = array[i]
			Objectlist.rest = {}
			OldObjectlist = Objectlist;

		}

		else {

			newObjectList = {

				value:array[i],
				rest:null

			}


			OldObjectlist.rest = newObjectList;

			OldObjectlist = newObjectList;

		}
	}

	return Objectlist
	
}

const listToArray = (list) => {

	let array = [],

	newRest = null;

	array.push(list.value);

	newRest = list.rest;

	while(newRest) {

		array.push(newRest.value);
		newRest = newRest.rest;

	}

	return array;

}


deepEqual = (object1,object2) => {

	if(object1 === object2) return true;

	let key1 = Object.keys(object1),key2 = Object.keys(object2);

	for(key of key1) {

		if(!key2.includes(key)) return false;

	}

	for(value in object1) {

		if(object1[value] != object2[value]) return false;

	}

	return true;

}

const obj = {a:1,b:2}

const obj2 = {a:3,b:4}

const obj3 = {a:1,b:2}









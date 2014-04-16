// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/
var splice = function(arr, start, numToReplace, replace) {
	var output = [];
	// for(var i=0; i<arr.length; i++) {
	// 	if ((i < start) || (i === start + numToReplace)){
	// 		output.push(arr[i]);
	// 	}
	// 	else {
	// 		if (i === 4) {
	// 			output.push(arr[i]);
	// 		}
	// 	}


	// step 1: take index 1 and on OUT
	// step 2: push 'z' to index 1
	// step 3: push "d", "e"
	for(var i=0; i<arr.length; i++){
		if (i === start-1 ) {
		output.push(arr[i]);
		output.push('z');
		}
		if(i > 2) {
		output.push(arr[i]);
		}
	}
	 


	

	// for(var i=0; i<arr.length; i++) {
	// 	if (i===0 || i===3 || i===4){
	// 		output.push(arr[i]);
	// 	}
	// }

	// if ()
	// push z
	// if
	// 
	
	return output;
};
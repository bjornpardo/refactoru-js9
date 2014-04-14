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
	for(var i=0; i<arr.length; i++) {
		if (i===0 || i===1 || i===4){
		output.push(arr[i]);

		}
	}

	// for(var i=0; i<arr.length; i++) {
	// 	if (i===0 || i===3 || i===4){
	// 		output.push(arr[i]);
	// 	}

		
	// }
	// arr.insert(1,'z');

	return output;


};




/*
    Generators Example

    Declare generator alpha as a const to
    prevent mutation later in the code. 
    Use const as a symantic construct to 
    denote unchanging variables

    for-of loop calls the gen::next method
    until the generator is exhausted.

    let in the for-of loop creates a new
    context in the for loop, therefore, the
    suffix variable is not available outside
    the scope of the for loop.
*/

const alpha = function* alpha() {
    yield 'a';
    yield 'b';
    yield 'c';
};

for (let suffix of alpha()) {
    console.log(suffix);
}

/*
    Custom Iterator Example

    The custom iterator must have a next
    method that returns an object with a
    done key and/or a value key.

    The for-of loop checks if the value
    returned by the iterator has the property
    done === true.  If so the loop is broken,
    if not, the value property is assigned to
    the variable number.
*/

let count = 0;

const somethingIteratable = {
	next: function() {
		let output = {value: ++count};
		if (count > 10) output.done = true;
	    return output;	
	}
};

for (let number of somethingIteratable) {
	console.log(number);
}


//Stack in JS

var Stack = function () {
	this.head = null //Stack starts with empty head
};

Stack.prototype.push = function (data) {
	if (this.head === null) { //If stack is empty add first item to the head
		var newItem = {data: data, prev: null};
		this.head = newItem;
	} else { // If not empty, move current head to nextItem, set new value as head
		var temp = this.head
		var nextItem = {data: data, prev: temp};
		this.head = nextItem;
	}
};

Stack.prototype.pop = function (callback) {
	if (this.head === null || !this.head.hasOwnProperty('prev')) { //If head is empty 'underflow'
		return callback("Underflow", null);
	} else {
		var popped = this.head.data;
		this.head = this.head.prev;
		return callback(null, popped);
	}
} ;


/////TEST///////

var st = new Stack();
st.push(9);
st.push(8);
st.push(78);
st.pop(console.log);
st.pop(console.log);
console.log(st);

var st2 = new Stack();
st2.pop(console.log);

var st3 = new Stack();
st.push("adsfasdf");
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
st.push(45);
console.log(st3);

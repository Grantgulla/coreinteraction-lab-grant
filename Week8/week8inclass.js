//1
var testArray = [4, 13, 87];
var result = getFirst(testArray);
console.log(result);

function getFirst (){
	return testArray [0]

}

//2
var testArray = [4, 13, 87];
var result = getLast(testArray);
console.log(result); 

function getLast (testArray){
	var last = testArray[testArray.length-1];
	return last
}


// 3
var testArray = [4, 13, 87];
var largest= 0
for (i=0; i<=largest;i++){
    if (testArray[i]>largest) {
        var largest=testArray[i];
    }
}
console.log(largest);


//4
var testArray = [4, 13, 87];
var result = decrementArray(testArray);
console.log(result);

function decrementArray (testArray){
	for(var i = 0; i < testArray.length; ++i) {
    testArray[i] = testArray[i]-1;
	}
	return testArray
}

//5
function addHello(argArray) {
  for (var i = 0; i < argArray.length; ++i) {
    argArray[i] = argArray[i] + 'hello ';
  }
  
  return argArray;
}

var testArray = ['sweet', 'sphere', 'stream'];
addHello(testArray);
console.log(testArray);


//6
function appendSomething(argArray) {
  argArray.push('something');
}

var testArray = [4, 13, 87];
appendSomething(testArray);
console.log(testArray) 


//7

var myObject = {
	name: 1,
    otherThing: 2
};

var people = [{
	 name: 'person', 
	 height: 345
}]


function listProps (argObject) {
  for (var key in argObject) {
    console.log(key);
  }
}

listProps({ a: 1, b: 2 });














//define a recipes object
var recipes = {}

//create object updateObjectWithKeyAndValue
// returns an object with the origal key value pairs and the new key value pair
//expected [function; updateObjectWithKeyAndValue] to match { prop: 1, prop2: 2}
function updateObjectWithKeyAndValue(obj, key, value) {
return Object.assign({}, obj, {[key]: value})
}

//deletes 'key' from a clone of object and returns the new object (it is non-destructive)
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
obj[key] = value;
return obj
}

//returns object without the delete key/value pair
function deleteFromObjectByKey(obj, key, value) {
var newObj = Object.assing({}, object);
delete newObj[key];
return newObj;
}

//modfies the original object
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
delete object[key];
return object;
}

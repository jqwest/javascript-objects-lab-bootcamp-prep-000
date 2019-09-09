//define a recipes object
var recipes = {}

//create object updateObjectWithKeyAndValue
// returns an object with the origal key value pairs and the new key value pair
//expected [function; updateObjectWithKeyAndValue] to match { prop: 1, prop2: 2}
function updateObjectWithKeyAndValue(obj, key, value) {
  var obj = { prop: 1 }
return Object.assign({}, obj, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
obj[key] = value
return obj
}

function deleteFromObjectByKey(obj, key, value) {

}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {

}

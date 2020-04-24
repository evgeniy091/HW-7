var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]
persons.sort((a,b) => a.age > b.age ? 1 : -1);

persons.sort((a,b) => b.name > a.name ? 1 : -1)

console.log(persons)



var myMass = ["1", {}, null, undefined, "500", 700];

var result  = myMass.map(function(item, index, arr) {
  var number = parseInt(item);
  return isNaN(number)? item : number;
});

console.log(result);




var myMass1 = ["0", 5, 3, "string", null]
var result = myMass1.reduce(function(previousValue, currentValue){
    
    return typeof currentValue == 'number'&& currentValue > 0 ? previousValue * currentValue : previousValue;},1);
    
    console.log(result);




var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
     color: "black"
    };
    function filter(object, fn){
     return Object.entries(object).filter(e => fn(...e)).reduce((a,[b, c] = b) => (a[b] = c, a),{})
    }
    console.log(filter(phone,function(key,value){
    return (key == "color" || value == 2);
     }));
    



function map(object, callback){
    for(var key in object)  Object.assign(object,callback(key, object[key])), delete object[key];
    }
    var object = {name: "Иван", age: 17};
    map(object,function(key,value){
        var result = {};
        result[key+"_"] = value + "$";
        return result;
    })
    
    console.log(JSON.stringify(object, null, 4))
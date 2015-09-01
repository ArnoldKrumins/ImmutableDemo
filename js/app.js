/**
 * Created by arnold.krumins on 26/08/2015.
 */
var app = (function(){

    var map1 = Immutable.Map({a:1, b:2, c:3});
    var map2 = map1.set('b', 50);

    var familyOne = [
        {name:'Arnold', age:48, nationality:'British', sex:'m'},
        {name:'Anna', age:1, nationality:'Swedish', sex:'f'},
        {name:'Alice', age:3, nationality:'Swedish', sex:'f'},
        {name:'Amie', age:34, nationality:'Swedish', sex:'f'}
        ];

    var familyTwo = [
        {name:'Arnold', age:48, nationality:'British', sex:'m'},
        {name:'Anna', age:1, nationality:'Swedish', sex:'f'},
        {name:'Alice', age:3, nationality:'Swedish', sex:'f'},
        {name:'Zoe', age:40, nationality:'English', sex:'f'},
        {name:'Zack', age:20, nationality:'American', sex:'m'}
    ];


    var map3 = Immutable.List(familyOne);
    var map4 = Immutable.List(familyTwo);

    test = function(){

        console.log(map1.toJS());
        console.log(map2.toJS());
    };


    merge = function(){

        var result =  map3.toSet().union(map4.toSet()).toList().toJS();
        console.log(map3.toJS());
        console.log(map4.toJS());
        console.log(result);

    };

    subtract = function(){

        var result =  map3.toSet().subtract(map4.toSet()).toList().toJS();
        console.log(map3.toJS());
        console.log(map4.toJS());
        console.log(result);


    };

    isEqual = function(){

        return map3 === map4;

    };

    filter = function(){

        return map3.filter(function(obj){
             return obj.name === 'Arnold';
        }).toJS();
    };

    return{

        test:test,
        merge:merge,
        subtract:subtract,
        isEqual:isEqual,
        filter:filter

    };


}());

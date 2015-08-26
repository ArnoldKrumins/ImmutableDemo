/**
 * Created by arnold.krumins on 26/08/2015.
 */
var app = (function(){

    var map1 = Immutable.Map({a:1, b:2, c:3});
    var map2 = map1.set('b', 50);

    test = function(){

        console.log(map1.toJS());
        console.log(map2.toJS());
    }



    return{

        test:test

    }


}());

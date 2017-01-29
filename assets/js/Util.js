"use strict"
var Util = (function (_math) {

    return {
        capitalizeFirstLetter: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        randomNumberBetween: function (min, max) {
            return _math.floor(_math.random() * (max - min)) + min;
        },
        fetchRandom: function (obj) {
            var temp_key, keys = [];
            for (temp_key in obj) {
                keys.push(temp_key);
            }
            return obj[keys[_math.floor(_math.random() * keys.length)]];
        },
        countWords: function(str) {
            return str.trim().split(/\s+/).length;
        }
    }
})(Math);
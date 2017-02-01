"use strict"
var Util = (function (_math, _doc) {
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
        countWords: function (str) {
            return str.trim().split(/\s+/).length;
        },
        selectAndCopy: function (selector) {
            var _return = false;
            var cutTextarea = typeof selector == 'string' ? _doc.querySelector(selector) : selector;

            cutTextarea.select();
            _return = _doc.execCommand('copy');

            cutTextarea.blur();

            return _return;
        },
        createAlert: function (text) {
            var ipsumContainer = _doc.getElementById('generator-container'),
                div = _doc.createElement('div'),
                p = _doc.createElement('p');
            div.setAttribute('id', 'ipsum-alert');
            p.innerHTML = text;
            div.appendChild(p);
            ipsumContainer.appendChild(div);
            setTimeout(function () {
                div.remove();
            }, 4000);
        }
    }
})(Math, document);
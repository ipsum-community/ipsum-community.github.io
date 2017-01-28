"use strict"
var IpsumGenerator = (function (_doc, _window) {

    var _container = _doc.getElementById('phrase-container');

    function clearContainer() {
        _container.innerHTML = '';
    }

    function addToContainer(paragraph) {
        _container.innerHTML += paragraph;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function fetchRandom(obj) {
        var temp_key, keys = [];
        for (temp_key in obj) {
            keys.push(temp_key);
        }
        return obj[keys[Math.floor(Math.random() * keys.length)]];
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateIpsum(numberOfParagraphs) {
        var i, j, numberOfParagToMakeOne, paragraph;

        clearContainer();
        for (i = 0; i < numberOfParagraphs; i++) {
            paragraph = '';
            numberOfParagToMakeOne = getRandomInt(2, 10);

            for (j = 0; j < numberOfParagToMakeOne; j++) {
                paragraph += ' ' + fetchRandom(_window.store[0].text);
            }

            addToContainer('<p>' + capitalizeFirstLetter(paragraph) + '</p>');
        }
    }

    return {
        genIpsum: function (number) {
            number = number || 1;
            generateIpsum(number);
        }
    }
})(document, window);

"use strict"
var IpsumGenerator = (function (document, window) {

    var _doc = document,
        _window = window,
        _container = _doc.getElementById('phrase-container');

    function clearContainer() {
        _container.innerHTML = '';
    }

    function addToContainer(paragraph) {
        _container.innerHTML += paragraph;
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
            numberOfParagToMakeOne = getRandomInt(2, 20);

            for (j = 0; j < numberOfParagToMakeOne; j++) {
                paragraph += fetchRandom(window.store[0].text);
            }
            addToContainer('<p>' + paragraph + '</p>');
        }
    }

    return {
        genIpsum: function (number) {
            number = number || 1;
            generateIpsum(number);
        }
    }
})(document, window);

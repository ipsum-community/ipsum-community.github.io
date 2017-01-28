"use strict"
var IpsumGenerator = (function (_doc, _window, _util) {

    var _container = _doc.getElementById('phrase-container');

    function clearContainer() {
        _container.innerHTML = '';
    }

    function addToContainer(paragraph) {
        _container.innerHTML += paragraph;
    }

    function generateIpsum(numberOfParagraphs) {
        var i, j, numberOfParagToMakeOne, paragraph;

        clearContainer();
        for (i = 0; i < numberOfParagraphs; i++) {
            paragraph = '';
            numberOfParagToMakeOne = _util.randomNumberBetween(2, 10);

            for (j = 0; j < numberOfParagToMakeOne; j++) {
                paragraph += ' ' + _util.capitalizeFirstLetter(_util.fetchRandom(_window.store[0].text));
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
})(document, window, Util);

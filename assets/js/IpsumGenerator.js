"use strict"
var IpsumGenerator = (function (_doc, _window, _util) {

    var _container = _doc.getElementById('phrase-container');

    function clearContainer() {
        _container.value = '';
    }

    function addToContainer(paragraph) {
        _container.value += paragraph;
    }

    function generateIpsum(numberOfParagraphs) {
        var i, words, numberOfWordInParag, paragraph;

        clearContainer();
        for (i = 0; i < numberOfParagraphs; i++) {
            paragraph = '';
            words = 0;

            numberOfWordInParag = _util.randomNumberBetween(10, 40);

            while(words < numberOfWordInParag) {
                paragraph += ' ' + _util.capitalizeFirstLetter(_util.fetchRandom(_window.store[0].text));
                words = _util.countWords(paragraph);
            }

            addToContainer(paragraph + '\n\n');
        }
        _util.selectAndCopy(_container)
    }

    return {
        genIpsum: function (number) {
            number = number || 1;
            generateIpsum(number);
        }
    }
})(document, window, Util);

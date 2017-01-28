"use strict"
var IpsumListener = (function (_doc, _window, IpsumGenerator) {

    var _ipsumGen = IpsumGenerator,
        _btnGenerator = _doc.getElementById('btn-generate'),
        _paragNumInput = _doc.getElementById('paragraph-number-input');

    /**
     * Add all the listeners here
     */
    _btnGenerator.addEventListener("click", generateIpsum, false);


    function generateIpsum() {
        _ipsumGen.genIpsum(_paragNumInput.value);
    }
})(document, window, IpsumGenerator);

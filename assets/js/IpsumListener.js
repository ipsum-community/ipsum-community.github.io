"use strict"
var IpsumListener = (function (_doc, _window, _ipsumGen) {

    var _btnGenerator = _doc.getElementById('btn-generate'),
        _formGenerator = _doc.getElementById('form-generate'),
        _paragNumInput = _doc.getElementById('paragraph-number-input');

    /**
     * Add all the listeners here
     */
    _btnGenerator.addEventListener("click", generateIpsum, false);
    _formGenerator.addEventListener("submit", onSubmit, false);


    function onSubmit(e) {
        e.preventDefault();
        generateIpsum();
    }

    function generateIpsum() {
        _ipsumGen.genIpsum(_paragNumInput.value);
    }

})(document, window, IpsumGenerator);

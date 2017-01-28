"use strict"
var IpsumListener = (function (_doc, _window, IpsumGenerator) {

    var _ipsumGen = IpsumGenerator,
        _btnGenerator = _doc.getElementById('btn-generate'),
        _frmGenerator = _doc.getElementById('form-generate'),
        _paragNumInput = _doc.getElementById('paragraph-number-input');

    /**
     * Add all the listeners here
     */
    _btnGenerator.addEventListener("click", generateIpsum, false);
    _frmGenerator.addEventListener("submit", onSubmit, false);


    function onSubmit(e) {
        e.preventDefault();
        generateIpsum();
    }
    function generateIpsum() {
        _ipsumGen.genIpsum(_paragNumInput.value);
    }
})(document, window, IpsumGenerator);

"use strict"
var IpsumListener = (function (_doc, _window, _ipsumGen) {

    var _formGenerator = _doc.getElementById('form-generate'),
        _paragNumInput = _doc.getElementById('paragraph-number-input');

    /**
     * Add all the listeners here
     */
    _formGenerator.addEventListener("submit", onSubmit, false);


    function onSubmit(e) {
        e.preventDefault();
        _ipsumGen.genIpsum(_paragNumInput.value);
    }

})(document, window, IpsumGenerator);

"use strict"
var IpsumListener = (function (_doc, _ipsumGen) {

    var _formGenerator = _doc.getElementById('form-generate'),
        _paragNumInput = _doc.getElementById('paragraph-number-input'),
        _startWith = _doc.getElementById('start-with');

    /**
     * Add all the listeners here
     */
    _formGenerator.addEventListener("submit", onSubmit, false);


    function onSubmit(e) {
        e.preventDefault();
        var start = _startWith && _startWith.checked ? _startWith.value : undefined;
        _ipsumGen.genIpsum(_paragNumInput.value, start);
    }

})(document, IpsumGenerator);

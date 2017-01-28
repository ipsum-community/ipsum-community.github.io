"use strict"
var IpsumAutoLoad = (function (_doc, _window, IpsumGenerator) {

    var _ipsumGen = IpsumGenerator,
        _paragNumInput = _doc.getElementById('paragraph-number-input');

    _ipsumGen.genIpsum(_paragNumInput.value);

})(document, window, IpsumGenerator);

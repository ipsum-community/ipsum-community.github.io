"use strict"
var Listener = (function (_ipsumSearch, _el) {
    var _input;
    _el.setIdInputSearch('ipsum-search');
    _el.setIdMessageDiv('no-ipsum-match');

    _input = _el.getSearchInput();

    /**
     * Add focus on startup
     */
    _input.focus();

    /**
     * Add all the listeners here
     */
    _input.addEventListener("keyup", whenTyping, false);


    function whenTyping(e) {
        e.preventDefault();
        var allIpsums, ipsumMatches;

        allIpsums = _el.getAllElementsByClass("ipsum-name");
        _el.removeHideClassTo(allIpsums);

        ipsumMatches = _ipsumSearch.search(e.target.value);
        _el.showMessageIfHasNo(ipsumMatches);

        var elementsToHide = _el.getAllInSelectorExcept('.ipsum-name', ipsumMatches);
        _el.addHideClassTo(elementsToHide);
    }

})(Search, Elements);

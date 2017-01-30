"use strict"
var SearchListener = (function (_doc, _window, _ipsumSearch) {

    var _input = _doc.getElementById('ipsum-search');

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
        var allIpsums, ipsumMatches, queryCombined;

        allIpsums = _doc.getElementsByClassName("ipsum-name");
        removeHideClass(allIpsums);

        ipsumMatches = _ipsumSearch.search(e.target.value);

        queryCombined = combineDenyingNamesInSelector('.ipsum-name', ipsumMatches);

        var elementsToHide = _doc.querySelectorAll(queryCombined);
        addHideClass(elementsToHide);
    }

    function removeHideClass(el) {
        var index;
        for (index = 0; index < el.length; index++) {
            if (el[index].classList.contains('hide')) {
                el[index].classList.remove('hide');
            }
        }
    }

    function addHideClass(el) {
        var index;
        for (index = 0; index < el.length; index++) {
            el[index].classList.add('hide');
        }
    }

    function combineDenyingNamesInSelector(selector, ipsumMatches) {
        var queryCombined = selector, match;
        for (match in ipsumMatches) {
            queryCombined += ":not([name='" + ipsumMatches[match] + "'])";
        }
        return queryCombined
    }
})(document, window, IpsumSearch);

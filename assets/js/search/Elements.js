"use strict"
var Elements = (function (_doc) {

    var _idMessageDiv, _idInputSearch;

    function queryForDenyingNamesInSelector(selector, elements) {
        var queryCombined = selector, element;
        for (element in elements) {
            queryCombined += ":not([name='" + elements[element] + "'])";
        }
        return queryCombined;
    }

    return {
        setIdInputSearch: function (id) {
            _idInputSearch = id;
        },
        setIdMessageDiv: function (id) {
            _idMessageDiv = id;
        },
        getSearchInput: function () {
            return _doc.getElementById(_idInputSearch);
        },
        getAllElementsByClass: function (name) {
            return _doc.getElementsByClassName(name);
        },
        getAllBy: function (query) {
            return _doc.querySelectorAll(query);
        },
        getAllInSelectorExcept: function (selector, elements) {
            return this.getAllBy(queryForDenyingNamesInSelector(selector, elements));
        },
        showMessageIfHasNo: function (elements) {
            var messageDiv = _doc.getElementById(_idMessageDiv),
                elementsLength = elements.length;

            if (!elementsLength) {
                messageDiv.classList.remove('hide');
            } else if (elementsLength && !messageDiv.classList.contains('hide')) {
                messageDiv.classList.add('hide');
            }
        },
        removeHideClassTo: function (el) {
            var index;
            for (index = 0; index < el.length; index++) {
                if (el[index].classList.contains('hide')) {
                    el[index].classList.remove('hide');
                }
            }
        },
        addHideClassTo: function (el) {
            var index;
            for (index = 0; index < el.length; index++) {
                el[index].classList.add('hide');
            }
        }
    }
})(document);
"use strict"
var IpsumSearch = (function (_doc, _window) {

    var _ipsums = _window.store;

    return {
        search: function (title) {
            var key, regex, matches = [], ipsumTitle;

            for (key in _ipsums) {
                ipsumTitle = _ipsums[key],
                    regex = new RegExp(title, 'gi');
                if (ipsumTitle.match(regex)) {
                    matches.push(ipsumTitle);
                }
            }
            return matches;
        }
    };
})(document, window);
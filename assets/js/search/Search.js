"use strict"
var Search = (function (_window) {

    var _ipsums = _window.ipsums;

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
})(window);
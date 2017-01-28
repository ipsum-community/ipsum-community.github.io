window.onload = function () {
};

function loadParagraphs(limit) {
    limit = limit ? limit : 1;


    var container = document.getElementById('phrase-container');
    container.innerHTML = '';

    for (i = 0; i < limit; i++) {
        var pLimit = getRandomInt(2, 20);
        var p = ''

        for (j = 0; j < pLimit; j++) {
            p = p + fetchRandom(window.store[0].text);
        }
        container.innerHTML = container.innerHTML + '<p>' + p + '</p>';
    }
}
function fetchRandom(obj) {
    var temp_key, keys = [];
    for (temp_key in obj) {
        if (obj.hasOwnProperty(temp_key)) {
            keys.push(temp_key);
        }
    }
    return obj[keys[Math.floor(Math.random() * keys.length)]];
}
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
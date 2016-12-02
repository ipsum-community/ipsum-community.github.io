window.onload = function() {
    load_ipsum_list();
};

function load_ipsum_list() {
    for(i in ipsum_list) {
        ipsum_package(ipsum_list[i]);
    }
}

function ipsum_package(ipsum) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {''
            console.log(this.responseText);
        }
    });

    xhr.open('GET', 'db/' + ipsum + '/package.json');
    xhr.setRequestHeader('cache-control', 'no-cache');

    xhr.send(data);
}
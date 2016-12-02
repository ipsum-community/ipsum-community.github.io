window.onload = function() {
    load_ipsum_list();
};

function load_ipsum_list() {
    for(ipsum_name in ipsum_list) {
        get_ipsum(ipsum_name);
    }
}
function get_ipsum(ipsum_name)
{
    ipsum_list[ipsum_name] = localStorage.getItem(ipsum_name);

    if(!ipsum_list[ipsum_name]) {
        ipsum_package(ipsum_name);
    }else{
        ipsum_list[ipsum_name] = JSON.parse(ipsum_list[ipsum_name]);
    }
}
function ipsum_package(ipsum_name) {
    var data = null;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            localStorage.setItem(ipsum_name, this.responseText);
            ipsum_list[ipsum_name] = JSON.parse(this.responseText);
        }
    });

    xhr.open('GET', 'db/' + ipsum_name + '/package.json');
    xhr.setRequestHeader('cache-control', 'no-cache');
    xhr.send(data);
}
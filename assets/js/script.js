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
            var package = this.responseText;
            package = JSON.parse(package);
            package = get_language(package);
            localStorage.setItem(ipsum_name, JSON.stringify(package));
            ipsum_list[ipsum_name] = package;
        }
    });

    xhr.open('GET', 'db/' + ipsum_name + '/package.json');
    xhr.setRequestHeader('cache-control', 'no-cache');
    xhr.send(data);
}
function get_language(package)
{
    package.lang = new Object();

    for(contributor_name in package.contributor) {
        var contributor = package.contributor[contributor_name];

        for(lang in contributor) {
            var count = contributor[lang];

            for (j = 1; j <= count; j++) {
                if(!package.lang[lang]) {
                    package.lang[lang] = new Object();
                }
                package.lang[lang][contributor_name + j] = contributor_name + j;
            }
        }
    }
    return package;
}
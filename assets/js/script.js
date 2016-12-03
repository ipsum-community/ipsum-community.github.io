var ipsum = [];
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
    ipsum_list[ipsum_name] = window.sessionStorage.getItem(ipsum_name);

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
            window.sessionStorage.setItem(ipsum_name, JSON.stringify(package));
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
function retrieve_ipsum(ipsum_name, lang, limit) {
    lang = lang ? lang : 'en';
    limit = limit ? limit : 1;

    var data_list = ipsum_list[ipsum_name].lang[lang];

    if(!data_list) {
        throw "package error";
    }

    for (i = 0; i < limit; i++) {
        var json = fetch_random(data_list);
        fetch_json(ipsum_name, lang, json);
    }

}
function fetch_random(obj) {
    var temp_key, keys = [];
    for(temp_key in obj) {
        if(obj.hasOwnProperty(temp_key)) {
            keys.push(temp_key);
        }
    }
    return obj[keys[Math.floor(Math.random() * keys.length)]];
}
function fetch_json(ipsum_name, lang, json) {
    var data = null;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            var json = this.responseText;
            json = JSON.parse(json);
            ipsum.push(json.description)

            console.log(ipsum);
        }
    });

    xhr.open('GET', 'db/' + ipsum_name + '/' + lang + '/' + json + '.json');
    xhr.setRequestHeader('cache-control', 'no-cache');
    xhr.send(data);
}
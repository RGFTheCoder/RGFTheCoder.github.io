var searchParams = new URLSearchParams(window.location.search);

var page = searchParams.get('p');

var dir = document.location.protocol + "/" + document.location.pathname.split("/").slice(0, -1).join("/") + "/pages/" + page + ".html"


//console.log(dir);


$.get("./pages/" + page + ".html", function(data) {
    $("div#content").html(data);
});

var conf = {};
$.get("./conf/pages.json", function(data) {
    conf = data;
});

window.onload = function() {

    var $list = $("ul#nav")

    var html = "";

    for (const i in conf) {
        if (conf.hasOwnProperty(i)) {
            const element = conf[i];
            html += "<li><a class=\"\" href=\"?p=" + element + "\">" + capitalizeFirstLetter(element) + "</a></li>";
        }
    }

    $list.html(html);
}

//console.log(conf);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
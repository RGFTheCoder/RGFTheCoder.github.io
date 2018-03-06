var searchParams = new URLSearchParams(window.location.search);

var page = searchParams.get('p');

var dir = document.location.protocol + "/" + document.location.pathname.split("/").slice(0, -1).join("/") + "/pages/" + page + ".html"


console.log(dir);


$.get("./pages/" + page + ".html", function(data) {
    $("div#content").html(data);
});
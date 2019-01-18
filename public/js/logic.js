$(document).ready(function () {
    $('select').formSelect();
});
    
    /* global moment */

    function insert() {

        var weatherCondition = $("#weatherCondition").val();
        var blogTitle = $("#blogTitle").val();
        var userName = $("#userName").val();
        var cityName = $("#cityName").val();
        var stateName = $("#stateName").val();
        var countryName = $("#countryName").val();
        var weatherInput = $("#weatherInput").val();

        var data = {
            weatherCondition,
            blogTitle,
            userName,
            cityName,
            stateName,
            countryName,
            weatherInput,
        }
    } $.then(function (event) {
        event.preventDefault();
        var blog = {
            text: blogInputs.val().trim(),
        };
        $.post("/api/posts", data, getPosts);
        blogInputs.val(data)
    });

var blogInputs = $("input.blogInput");
var blogContainer = $("#blogPosts");
$('select').formSelect();
$(document).on("submit", "blogPosts", postNewBlog)

var blogs = [];
getPosts();


function initializeColumn() {
    blogContainer.empty();
    var blogsToAdd = [];
    for (var i = 0; i < blogs.length; i++) {
        blogsToAdd.push(postNewBlog(blogs[i]));
    }
    blogContainer.prepend(blogsToAdd);
}

function getPosts() {
    $.get("/api/posts", function (data) {
        blogs = data;
        initializeColumn();
    });
}





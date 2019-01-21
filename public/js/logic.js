$(document).ready(function () {
    $('select').formSelect();
    $('#new-blog').on("click", insert);

/* global moment */

function insert(event) {
    event.preventDefault();
    var weather_condition = $("#weatherCondition").val();
    var blog_title = $("#blogTitle").val();
    var user_name = $("#userName").val();
    var city_name = $("#cityName").val();
    var state_name = $("#stateName").val();
    var country_name = $("#countryName").val();
    var weather_input = $("#weatherInput").val();

    var data = {
        weather_condition,
        blog_title,
        user_name,
        city_name,
        state_name,
        country_name,
        weather_input,
    }
    console.log("data from insert:", data);
    $.post("/api/posts", data, getPosts);
    clearForm();
};

function clearForm() {
    $('#weatherCondition').val('');
    $('#blogTitle').val('');
    $('#userName').val('');
    $('#cityName').val('');
    $('#stateName').val('');
    $('#countryName').val('');
    $('#weatherInput').val('');
};

var blogInputs = $("input.blogInput");
var blogContainer = $("#blogPosts");
var blogs = [];
getPosts();

function createBlog(data) {
    return $("<div>" + data.weather_condition + "</div>" +
    "<div>" + data.blog_title + "</div>"  + 
    "<div>" + data.user_name + "</div>"+
    "<div>" + data.city_name + "</div>"+
    "<div>" + data.state_name + "</div>"+
    "<div>" + data.country_name + "</div>"+
    "<div>" + data.weather_input + "</div>"+"<br>");
}

function initializeColumn(blogs) { //ADDED BLOGS INPUT TO THIS FUNCTION
    blogContainer.empty();
    var blogsToAdd = [];
    console.log("blogs from intializecolumn:", blogs);
    for (var i = 0; i < blogs.length; i++) {
        blogsToAdd.push(createBlog(blogs[i]));
        
    }
    blogContainer.prepend(blogsToAdd);
}

function getPosts() {
    $.get("/api/posts", function (data) {
        console.log("data from getPosts:", data);
        blogs = data;
        initializeColumn(blogs); //ADDED PASSING BLOGS DATA TO THIS FUNCTION
    });
}
//NOTE: should remove extra getPosts
getPosts();

});
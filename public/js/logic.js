<<<<<<< HEAD
=======
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
    console.log(data);
    $.post("/api/posts", data, getPosts);
    clearForm();
};

// $.then(function (event) {
//     event.preventDefault();
//     var blog = {
//         text: blogInputs.val().trim(),
//     };

//     $.post("/api/posts", data, getPosts);
//     blogInputs.val(data)

// });

function clearForm() {
    $('#weatherCondition').val('')
    $('#blogTitle').val('');
    $('#userName').val('');
    $('#cityName').val('');
    $('#stateName').val('');
    $('#countryName').val('');
    $('#weatherInput').val('');
};










var blogInputs = $("input.blogInput");
var blogContainer = $("#blogPosts");
//$('select').formSelect();
//$(document).on("submit", "blogPosts", postNewBlog);

var blogs = [];
getPosts();

function createBlog(data) {
    return $("<div>" + data.weather_condition + "</div>" +
    "<div>" + data.blog_title + "</div>"  + 
    "<div>" + data.user_name + "</div>"+
    "<div>" + data.city_name + "</div>"+
    "<div>" + data.state_name + "</div>"+
    "<div>" + data.country_name + "</div>"+
    "<div>" + data.weather_input + "</div>"+(br));
    
  
}

function initializeColumn() {
    blogContainer.empty();
    var blogsToAdd = [];
    for (var i = 0; i < blogs.length; i++) {
        blogsToAdd.push(createBlog(blogs[i]));
        
    }
    blogContainer.prepend(blogsToAdd);
}

function getPosts() {
    $.get("/api/posts", function (data) {
        blogs = data;
        initializeColumn();
        console.log(data);
    });
}

getPosts();

// function updatePost(post) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/posts",
//       data: post
//     }).then(getposts);
//   }





});
>>>>>>> colinBranch

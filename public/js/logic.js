$(document).ready(function () {
    /* global moment */
    var blogInputs = $("input.blogInput");
    var blogContainer = $(".submit");

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

    function postNewBlog() {


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
        };
        console.log(data)
        clearForm();

    };
    
    //clears the form after the user has submitted the data and created the object

    function clearForm() {
        $('#weatherCondition').val('')
        $('#blogTitle').val('');
        $('#userName').val('');
        $('#cityName').val('');
        $('#stateName').val('');
        $('#countryName').val('');
        $('#weatherInput').val('');
    };




    function insertBlog(event) {}



    $.post("/api/posts", data, getPosts);
    blogInputs.val("");






})










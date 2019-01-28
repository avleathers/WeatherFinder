$(document).ready(function () {
    // global
   $('select').formSelect();
   $('#new-blog').on("click", insert);
   // $('#blog-delete').on("click", deleteBlog);
   $(document).on("click", ".blog-delete", deleteBlog);

    // function for getting inputs from HTML and inserting into database 
    // by Colin
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
        blogInputs.val("");
        clearForm();
    };


    // function for empty the userinput blanks in HTML
    // by Colin
    function clearForm() {
        $('#weatherCondition').val('')
        $('#blogTitle').val('');
        $('#userName').val('');
        $('#cityName').val('');
        $('#stateName').val('');
        $('#countryName').val('');
        $('#weatherInput').val('');
    };


    // variables for post and blog sections
    var blogInputs = $("input.blogInput");
    var blogContainer = $(".row-for-posts");
    var blogs = [];
    var toDelete = 0;
    getPosts();


    function imageCall(data) {
        var checkWeather = data.weather_condition;
        imageSrc = [];
        console.log(checkWeather);
        if (checkWeather === "Flooding") {
            imageSrc = "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        else if (checkWeather === "Raining") {
            imageSrc = "https://images.pexels.com/photos/21492/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        else if (checkWeather === "Sunny") {
            imageSrc = "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        else if (checkWeather === "Snowing") {
            imageSrc = "https://images.pexels.com/photos/313104/pexels-photo-313104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        else if (checkWeather === "Humid") {
            imageSrc = "https://images.pexels.com/photos/843428/pexels-photo-843428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        else if (checkWeather === "Lightning") {
            imageSrc = "https://images.pexels.com/photos/66867/norman-oklahoma-lightning-dangerous-66867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
    }

// function for showing blog data from database
function createBlog(data) {
    imageCall(data);


    var inputDisplay = $(

        "<div class='blogBox'>"  +
        "<div id='image-row'><img id='blog-image' src='" + imageSrc + "'>" +"</div>" +
        "<div id='user-name'>posted by <u>" + data.user_name + "</u></div>" +
        "<div id='blog-title'>" + "<p><b> Title: </b>" + data.blog_title + "</p>" + "</div>" +
        "<hr>" +
        "<div id='blog-location'>" + "<p><b>Location: </b>" + data.city_name + ", " + data.state_name + ", " + data.country_name + "</p>" + "</div>" +
        "<div id='weather-condition'>" + "<b>Weather Condition: </b>" + data.weather_condition + "</div>" +
        "<hr>" +
        "<div id='weather-input'>" + data.weather_input + "</div>" +
        "<button class='delete btn btn-danger blog-delete' data-id='" + data.id + "'>Delete Post</button>" +
        "</div>"
    );

    return inputDisplay;
}


    // function for adding posts one by one.
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
            if (!blogs || !blogs.length) {
                emptyDisplay();
            }
            else {
                initializeColumn();
                console.log(data);
            }
        });
    }

    // find and delete post
   function deleteBlog() {
    var ID = $(this).attr("data-id");
    $.ajax({
        method: "DELETE",
        url: "/api/posts/" + ID
    }).then(getPosts);
    console.log("Blog has been deleted")
}



    // display message when no blog
    function emptyDisplay() {
        blogContainer.empty();
        var messageWhenEmpty = $("<h4>");
        messageWhenEmpty.css({"text-align": "center", "color": "ivory"});
        messageWhenEmpty.html("No posts yet.");
        blogContainer.append(messageWhenEmpty);
    }

});

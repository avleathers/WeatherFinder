$(document).ready(function () {
    $('select').formSelect();
});

$("input").keyup(function () {
    var txt = $("input").val();
    $.post("demo_ajax_gethint.asp", { suggest: txt }, function (result) {
        $("span").html(result);
    });
});
function insert() {
    var weatherCondition = $("#weatherCondition").val();
    var blogTitle = $("#blogTitle").val();
    var userName = $("#userName").val();
    var cityName = $("#cityName").val();
    var stateName = $("#stateName").val();
    var countryName = $("#countryName").val();
    var weatherInput = $("#weatherInput").val();
    console.log(weatherCondition, blogTitle, userName, cityName, stateName, countryName, weatherInput, weatherCondition);
    var obj={
        weatherCondition:"",
        blogTitle:"",
        userName:"",
        cityName:"",
        stateName:"",
        countryName:"",
        weatherInput:"",
    };
};

var messageBox = document.getElementById("blogPosts");

// var inputArray = [weatherCondition, blogTitle, userName, cityName, stateName, countryName];





// function clearAndShow() {
//     weatherInput.value = "";
//     blogTitleInput.value = "";
//     userNameInput.value = "";
//     cityInput.value = "";
//     stateInput.value = "";
//     countryInput.value = "";

//     messageBox.innerHTML = "";

//     messageBox.innerHTML += "Weather Condition: " + weatherInput.value("") + "<br/>";
//     messageBox.innerHTML += "Blog Title: " + blogTitleInput.value("") + "<br/>";
//     messageBox.innerHTML += "User name: " + userNameInput.value("") + "<br/>";
//     messageBox.innerHTML += "City: " + cityInput.value("") + "<br/>";
//     messageBox.innerHTML += "State: " + stateInput.value("") + "<br/>";
//     messageBox.innerHTML += "Country: " + countryInput.value("");

// };


    // document.write("weatherCondition");
    // document.write("blogTitle");
    // document.write("userName");
    // document.write("city");
    // document.write("state");
    // document.write("country");

    // clearAndShow();


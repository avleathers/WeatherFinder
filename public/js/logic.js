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
    var blogTitle = $("#blogTitle").val().trim;
    var userName = $("#userName").val().trim;
    var cityName = $("#cityName").val().trim;
    var stateName = $("#stateName").val().trim;
    var countryName = $("#countryName").val().trim;
    var weatherInput = $("#weatherInput").val().trim;
    console.log(weatherCondition, blogTitle, userName, cityName, stateName, countryName, weatherInput, weatherCondition);
    var data = {
        weatherCondition: "",
        blogTitle: "",
        userName: "",
        cityName: "",
        stateName: "",
        countryName: "",
        weatherInput: "",
    };
    $.ajax({
        data: JSON.stringify(data)
    });
};



var messageBox = document.getElementById("blogPosts");



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


$(document).ready(function () {
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
});

$("input").keyup(function () {
    var txt = $("input").val();
    $.post("demo_ajax_gethint.asp", { suggest: txt }, function (result) {
        $("span").html(result);
    });
});

var inputArray = [weather_condition, blog_title, user_name, city_name, state_name, country_name];

var weather_condition = document.getElementById("Weather Condition");
var blog_title = document.getElementById("Blog Title");
var user_name = document.getElementById(" User name");
var city_name = document.getElementById("City");
var state_name = document.getElementById("State");
var conutry_name = document.getElementById("Country");

var messageBox = document.getElementById("display");

function insert() {
    weather_condition.push(weatherInput.value);
    blog_title.push(blogTitleInput.value);
    user_name.push(userNameInput.value);
    city_name.push(cityInput.value);
    state_name.push(stateInput.value);
    country_name.push(countryInput.value);

    clearAndShow();
};

function clearAndShow() {
    weatherInput.value = "";
    blogTitleInput.value = "";
    userNameInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    countryInput.value = "";

    messageBox.innerHTML = "";

    messageBox.innerHTML += "Titles: " + titles.join(", ") + "<br/>";
    messageBox.innerHTML += "Names: " + names.join(", ") + "<br/>";
    messageBox.innerHTML += "Tickets: " + tickets.join(", ");
}

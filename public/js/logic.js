$(document).ready(function(){
    $('select').formSelect();
  });

$("input").keyup(function () {
    var txt = $("input").val();
    $.post("demo_ajax_gethint.asp", { suggest: txt }, function (result) {
        $("span").html(result);
    });
});

var weatherCondition = document.getElementsByClassName("weatherCondition");
var blogTitle = document.getElementById("blogTitle");
var userName = document.getElementById("userName");
var cityName = document.getElementById("cityName");
var stateName = document.getElementById("stateName");
var countryName = document.getElementById("countryName");

var messageBox = document.getElementById("blogPosts");

var inputArray = [weatherCondition, blogTitle, userName, cityName, stateName, countryName];
    console.log(inputArray);

document.getElementById(weatherCondition.value);



function clearAndShow() {
    weatherInput.value = "";
    blogTitleInput.value = "";
    userNameInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    countryInput.value = "";

    messageBox.innerHTML = "";

    messageBox.innerHTML += "Weather Condition: " + weatherInput.join(", ") + "<br/>";
    messageBox.innerHTML += "Blog Title: " + blogTitleInput.join(", ") + "<br/>";
    messageBox.innerHTML += "User name: " + userNameInput.join(", ") + "<br/>";
    messageBox.innerHTML += "City: " + cityInput.join(", ") + "<br/>";
    messageBox.innerHTML += "State: " + stateInput.join(", ") + "<br/>";
    messageBox.innerHTML += "Country: " + countryInput.join(", ");

};

function insert() {
    document.write("weatherCondition").value;
    document.write("blogTitle").value;
    document.write("userName").value;
    document.write("city").value;
    document.write("state").value;
    document.write("country").value;

    clearAndShow();
};

console.log(insert());
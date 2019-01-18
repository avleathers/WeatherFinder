//enables the dropdown menu

$(document).ready(function () {
    $('select').formSelect();
});

//defines the user input values and creates an object to be passed to the server

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






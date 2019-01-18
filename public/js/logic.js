
$(document).ready(function () {
    $('select').formSelect();
});

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

function clearForm() {
    $('#weatherCondition').val('')
    $('#blogTitle').val('');
    $('#userName').val('');
    $('#cityName').val('');
    $('#stateName').val('');
    $('#countryName').val('');
    $('#weatherInput').val('');
};






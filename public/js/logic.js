
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
    $.Post(data)
};
$("#btn btn-success submit btn-lg" ).on( "click", clearForm());
    



function clearForm(){
    $('blogForm').not('#weatherCondition, #blogTitle, #userName, #cityName, #stateName, #countryName, #weatherInput').val('');
};




   

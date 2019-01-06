$(function() {
    // Using core $.ajax() method
    $.ajax({
        // the URL for the request
        url: "./assets/pages/about.html",

        // whether this is a POST or GET request
        type: "GET",

        // the type of data we expect back
        dataType: "text",

        // Code to run if the request succeeds;
        // the response is passed to the function
        success: function(response) {
            console.log("the page was loaded", response);
            $(".content").html(response);
        },
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
        error: function(error) {
            console.log("the page was NOT loaded", error);
        },
        // Code to run regardless of success or failure
        complete: function(xhr, status) {
            console.log("THe request is complete!");
        }
    })
});
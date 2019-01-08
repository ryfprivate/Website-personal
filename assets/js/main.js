$(function () {
    // Changes flexbox layout if the window width changes
    var mQuery = window.matchMedia("(max-width: 768px)");
    changeFlex(mQuery);
    mQuery.addListener(changeFlex);

    // On-click function for link element to the about page
    $(".link--about").on("click", function (e) {
        // Prevents the link from going to another page
        e.preventDefault();
        // Finds the link of the particular page
        var pageRef = $(this).attr("href");
        callPage(pageRef);
    });

    function changeFlex(mQuery) {
        if (mQuery.matches) {
            // If window width is less than specified max-width
            document.querySelector(".main-content").style.backgroundColor = "yellow";
            console.log("inner = ", window.innerWidth);
            console.log("outer = ", window.outerWidth);
            console.log("screen = ", window.screen.width);
            colLayout();
        } else {
            document.querySelector(".main-content").style.backgroundColor = "pink";
            console.log("inner = ", window.innerWidth);
            console.log("outer = ", window.outerWidth);
            console.log("screen = ", window.screen.width);
            rowLayout();
        }
    }
    function colLayout() {
        var container = document.querySelector(".card-section__head");
        var avatarImg = document.querySelector(".card-section__head--avatar .avatar__img--wrapper");
        if (document.querySelector(".card-section__head.flex-row")) {
            container.classList.remove("flex-row");
            container.classList.add("flex-column");
            avatarImg.style.maxWidth = "200px";
        }
    }
    function rowLayout() {
        var container = document.querySelector(".card-section__head");
        var avatar = document.querySelector(".card-section__head--avatar");
        var avatarImg = document.querySelector(".card-section__head--avatar .avatar__img--wrapper");
        var info = document.querySelector(".card-section__head--info");
        if (document.querySelector(".card-section__head.flex-column")) {
            container.classList.remove("flex-column");
            container.classList.add("flex-row");
            container.classList.remove("pb-5");
            info.style.margin = ("auto 0");
            avatarImg.style.maxWidth = 280+"px";
            avatar.style.flex = "1";
            info.style.flex = "2";
        }
    }
    function callPage(pageRefInput) {
        // Using core $.ajax() method, calls the content of requested page
        $.ajax({
            // the URL for the request
            url: pageRefInput,
            // whether this is a POST or GET request
            type: "GET",
            // the type of data we expect back
            dataType: "text",
            // Code to run if the request succeeds;
            // the response is passed to the function
            success: function (response) {
                console.log("the page was loaded", response);
                $(".content").html(response);
            },
            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            error: function (error) {
                console.log("the page was NOT loaded", error);
            },
            // Code to run regardless of success or failure
            complete: function (xhr, status) {
                console.log("THe request is complete!");
            }
        });
    }
});
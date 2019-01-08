$(function () {
    // Changes flexbox layout if the window width changes
    var mQuery = window.matchMedia("(max-width: 768px)");
    changeFlex(mQuery);
    mQuery.addListener(changeFlex);

    // On-click function for home link
    $(".link--index").on("click", function (e) {
        // Prevents the link from going to another page
        e.preventDefault();
        // Finds the link of the particular page
        var pageRef = $(this).attr("href");
        callPage(pageRef);
    });

    // On-click function for resume link
    $(".link--resume").on("click", function (e) {
        // Prevents the link from going to another page
        e.preventDefault();
        // Finds the link of the particular page
        var pageRef = $(this).attr("href");
        callPage(pageRef);
    });

    function changeFlex(mQuery) {
        if (mQuery.matches) {
            // If window width is less than specified max-width
            colLayout();
        } else {
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
        var head_container = document.querySelector(".card-section__head");
        var head_avatar = document.querySelector(".card-section__head--avatar");
        var head_avatarImg = document.querySelector(".card-section__head--avatar .avatar__img--wrapper");
        var head_info = document.querySelector(".card-section__head--info");
        var body_container = document.querySelector(".card-section__body");
        var body_intro = document.querySelector(".card-section__body--intro");
        var body_info = document.querySelector(".card-section__body--info");
        if (document.querySelector(".card-section__head.flex-column")) {
            /* Restructuring format of card-section__head */
            head_container.classList.remove("flex-column");
            head_container.classList.add("flex-row");
            head_container.classList.remove("pb-5");
            head_avatar.style.flex = "1";
            head_avatarImg.style.maxWidth = 280+"px";
            head_info.style.flex = "2";
            head_info.style.margin = "auto 0";
            head_info.style.position = "relative";
            /* Restructuring format of card-section__body */
            body_container.classList.remove("flex-column");
            body_container.classList.add("flex-row");
            body_intro.style.flex = "1";
            body_info.style.flex = "1";
            document.querySelector(".card-section__body--intro p").style.maxWidth = "440px";
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
                $(".main-content").html(response);
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
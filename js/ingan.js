// $(function () {
//     $(document).ready(function () {
//         // APPENDING HTML
//         $(".load-html").each(function () {
//             var container = "#" + $(this).attr('data-container');
//             var src = $(this).attr('data-source');
//             $(container).load(src);
//         })
//     })
// });

// WORK SECTION
var forMore = $("<div>")
forMore.addClass("forMore bounce-1 helloScroll");
forMore.text("click links below to check it out");

$("#Work").on("mouseover", ".game", function () {
    var game = $(this).attr('id');
    $(".subTitle" + game).show();
    $(".worktitle" + game).show();
    $(".viewLink" + game).show();
    $("#" + game).prepend(forMore);
}).on("mouseout", ".game", function () {
    var game = $(this).attr('id');
    $(".subTitle" + game).hide();
    $(".worktitle" + game).hide();
    $(".viewLink" + game).hide();
    $(forMore).detach();
});

$("#bwokelogo").hide();
$("#Work").on("mouseover", "#bWokeDIV", function () {
    $(".morewoke").show();
    $(".worktitleBWoke").show();
    $(".subTitlebWoke").show();
    $(".bwokeDesc").show();
    $("#bwokelogo").show();
    $(".viewLinkbWoke").show();
}).on("mouseout", function () {
    $(".morewoke").hide();
    $(".morewoke").hide();
    $(".worktitleBWoke").hide();
    $(".subTitlebWoke").hide();
    $(".bwokeDesc").hide();
    $("#bwokelogo").hide();
    $(".viewLinkbWoke").hide();
});
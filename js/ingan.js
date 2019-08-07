var forMore = $("<div>")
forMore.addClass("forMore bounce-1 helloScroll");
forMore.text("click to play");

$("#container-2-sec").on("mouseover", ".work", function () {
    var game = $(this).attr('id');
    $(".subTitle" + game).show();
    $(".worktitle" + game).show();
    $("#" + game).prepend(forMore);
}).on("mouseout", ".work", function () {
    var game = $(this).attr('id');
    $(".subTitle" + game).hide();
    $(".worktitle" + game).hide();
    $(forMore).detach();
});
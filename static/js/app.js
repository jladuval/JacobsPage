$(function() {
    $("#showcase").carousel();
    $('#portfolio-slide').carousel({ interval: false });
    $('body').scrollspy({ offset: 0 })

    function scrollTo(element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, 1000, "easeOutBack");
    }

    $('a[data-scroll="true"]').each(function() {
        $(this).click(function () {
            scrollTo($(this).attr("href"));
            return false;
        })
    });
});

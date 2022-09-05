$(document).ready(function () {

    if (window.location.href.indexOf("index") > -1) {
        var urlRoute = './';
        var htmlRoute = 'footer_index.html';
    } else {
        var urlRoute = '../';
        var htmlRoute = 'footer.html';
    }

    // $('#header').load(urlRoute + 'common/' + htmlRoute, function () {
    //     console.log("해더");    
    // });


    $('#footer').load(urlRoute + 'common/' + htmlRoute, function () {
        console.log("푸터");    
        $('.modal.login_form .pop_con .mapage_form .label_chk, .modal .pop_con .mapage_form .label_chk').on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    });

});
$(document).ready(function () {

    // a태그 페이지 상단 이동 막기
    $('.btn_free, .btn_join, .game_scr .page_nav li').on('click', function () {
        console.log("상단이동제한");
        return false;
    });

    // 페이지 해더 종목명 노출 스크립트    
    $('.page_hdrName').hide();
    $(window).scroll(function () {        
        if ($('.page_hdrName').length) {                        
            var hdrNameTop = $('.mainBox.attr').offset().top;                                                                      
            if ($(document).scrollTop() == 0 && $(document).scrollTop() <= hdrNameTop) {            
                $('#header .bgWrap .leftLink').fadeIn();
                $('.page_hdrName').hide();
                $('#header .bgWrap').css({
                    'justify-content' : 'space-between',
                });
                $('.s_stokes #wrap #header.sub_hdr').removeClass('boxShadow');                
            } else if ($(document).scrollTop() !== 0 && $(document).scrollTop() > hdrNameTop) {                                                                      
                $('#header .bgWrap .leftLink').hide();
                $('.page_hdrName').fadeIn();
                $('#header .bgWrap').css({
                    'justify-content' : 'center',
                });
                $('.s_stokes #wrap #header.sub_hdr').addClass('boxShadow');                
            } 
        }
    }); 

    //select
    $(function () {
        var selectTarget = $('.selectbox select');

        // focus 가 되었을 때와 focus 를 잃었을 때
        selectTarget.on({
            'focus': function () {
                $(this).parent().addClass('focus');
            },
            'blur': function () {
                $(this).parent().removeClass('focus');
            }
        });

        selectTarget.change(function () {
            var select_name = $(this).children('option:selected').text();
            $(this).siblings('label').text(select_name);
            $(this).parent().removeClass('focus');
        });
    });

    //swiper    
    //메인 포트폴리오
    var swiper = new Swiper('.mainportfolioSwiper', {
        slidesPerView: "auto",
        spaceBetween: 8,
    });
    var swiper = new Swiper('.maingameSwiper', {
        slidesPerView: "auto",
        spaceBetween: 8,
    });

    // 상단 검색바
    $('.my_info').on('click', function () {
        $('.mypage_info').modal({
            fadeDuration: 100
        });
    });
    
    // 상단 검색바
    $('.autocompleteWrap, .bg_layer').hide();
    // $('.bgWrap .r_menu a.searchForm').on("focusout", function () {            
    //     $('.AutoComplete, .bg_layer').hide();
    // });
    $('.bg_layer').on("click", function () {            
        $('.AutoComplete, .bg_layer').hide();
    });
    $('.bgWrap .r_menu a.searchForm').on("click", function () {            
        $('.AutoComplete').slideDown(300);
        $('.bg_layer').show();
    });

    // 오늘의승부주 탭네비 상단 고정 시키기    
    $(window).scroll(function () {        
        if ($('.mainBox.game_scr').length) {
            var jbOffset = $('.mainBox.game_scr').offset();                                            
            if ($(document).scrollTop() < jbOffset.top - 34) {      
                $('.mainBox.game_scr').css({
                    'padding' : '25px 0 25px',                    
                });                                                      
                $('.mainBox.game_scr .page_nav').css({
                    'position' : 'relative',
                    'top': '0',
                }).removeClass('boxShadow');     
                
            } else {                            
                $('.mainBox.game_scr').css({
                    'padding' : '62px 0 25px',                    
                });                
                $('.mainBox.game_scr .page_nav').css({
                    'position' : 'fixed',
                    'top': '58px',                    
                }).addClass('boxShadow');              
            }
        }        
    });    
    
    // 메인 상단 탭네비 활성화  
    $(window).scroll(function () {                        
        if ($('.mainBox.game_scr .page_nav').length) {            
            var navoffset01 = $('.mainBox.game_scr').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight();                                                  
            var navoffset02 = $('.mainBox.portfolio').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight();                                                  
            var navoffset03 = $('.mainBox.strategy').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight();                                                        
            var navoffset04 = $('.mainBox.attr').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight();                  
            $('.mainBox.game_scr .page_nav li').removeClass('active');            
            if ($(document).scrollTop() >= 0 && $(document).scrollTop() < navoffset02) {                 
                $('.mainBox.game_scr .page_nav li a.nav_game_scr').parents().addClass('active');            
            } else if (navoffset01 <= navoffset02 && $(document).scrollTop() < navoffset03) {                                        
                $('.mainBox.game_scr .page_nav li a.nav_portfolio').parents().addClass('active');    
            } else if (navoffset02 <= navoffset03 && $(document).scrollTop() < navoffset04) {                  
                $('.mainBox.game_scr .page_nav li a.nav_strategy').parents().addClass('active');   
            } else {                
                $('.mainBox.game_scr .page_nav li a.nav_attr').parents().addClass('active');            
            }
        }        
    });    
    // 메인 상단 탭네비 페이지내 이동    
    $('.mainBox.game_scr .page_nav li a.nav_game_scr').on("click", function () {
        var offset = $('html').offset();
        $('html').animate({ scrollTop: offset.top}, 400);        
        // $('.mainBox.game_scr .page_nav li').removeClass('active');
    });
    $('.mainBox.game_scr .page_nav li a.nav_portfolio').on("click", function () {
        var offset = $('.mainBox.portfolio').offset();
        $('html').animate({ scrollTop: offset.top - 80 }, 400);        
    });
    $('.mainBox.game_scr .page_nav li a.nav_strategy').on("click", function () {
        var offset = $('.mainBox.strategy').offset();
        $('html').animate({ scrollTop: offset.top - 80 }, 400);
    });
    $('.mainBox.game_scr .page_nav li a.nav_attr').on("click", function () {
        var offset = $('.mainBox.attr').offset();
        $('html').animate({ scrollTop: offset.top - 80 }, 400);        
    });

    // 서브 오늘의 승부주 필터 active
    $('.s_stokes #wrap #container.sub_stock .winner .w_filter ul li').on("click", function () {
        $('.s_stokes #wrap #container.sub_stock .winner .w_filter ul li').removeClass('active');
        $(this).addClass('active');
    });
    $('.s_stokes #wrap #container.sub_stock .portfolio_recom .adequateArea .tableData .table_filter li').on("click", function () {
        $('.s_stokes #wrap #container.sub_stock .portfolio_recom .adequateArea .tableData .table_filter li').removeClass('active');
        $(this).addClass('active');
    });

    // 회원로그인 체크여부
    $('.sub_login .agree_area .agree_from .label, .modal.login_form .pop_con .mapage_form .label_chk, .payment_area .payment_note .note_chk .txt, .payment_area.nicepay .card_info span.bns_num, .payment_area.nicepay .agree_chk .txt, .payment_area.nicepay .payment_chk .txt, .pop_con .mapage_form .label_chk').on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    // 결제동의하기 전체약관동의 체크
    $('.payment_note .top .agree').on("click", function () {
        console.log("test");
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
            $('.agree_chk .txt').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.agree_chk .txt').addClass('active');
        }
    });

    // 결제 박스 선택
    $('.s_stokes #wrap #container.sub_payment .payment_area .serviceStep .step_box').on("click", function () {
        $('.s_stokes #wrap #container.sub_payment .payment_area .serviceStep .step_box').removeClass('active');            
        $(this).addClass('active');
    });
    

    // 모달팝업
    // 슈퍼스톡스 프리미엄 2주 무료
    // $('.btn_free').on('click', function () {
    //     $('.premium_pop.free2weeks').modal({
    //         fadeDuration: 100
    //     });
    // });    
    // 슈퍼스톡스 프리미엄 가입하기
    $('.btn_free, .btn_join').on('click', function () {
        $('.premium_pop.premium_join').modal({
            fadeDuration: 100
        });
    });
    // 월자동결제 서비스 변경 팝업
    $('.btn_payCan').on('click', function () {
        $('.login_form').modal({
            fadeDuration: 100
        });
    });
    $('.btn_payRefund').on('click', function () {
        $('.refund').modal({
            fadeDuration: 100
        });
    });
    // 나이스페이 진행중인 결제 취소
    $('.s_stokes #wrap #container.sub_payment .payment_area.nicepay .btnArea.payBtn a.btn_cncl').on('click', function () {
        $('.paymentCancel').modal({
            fadeDuration: 100
        });
    });
    $('.age_pop01').on('click', function () {
        $('.pay_terms01').modal({
            fadeDuration: 100
        });
    });
    $('.age_pop02').on('click', function () {
        $('.pay_terms02').modal({
            fadeDuration: 100
        });
    });
    $('.age_pop03').on('click', function () {
        $('.pay_terms03').modal({
            fadeDuration: 100
        });
    });
    
    


    // 진단점수 그래프바 에니메이션 효과
    (function( $ ) {
        $(function() {
            function animated_contents() {
                $(".zt-skill-bar > div ").each(function (i) {
                    var $this  = $(this),
                        skills = $this.data('width');
    
                    $this.css({'width' : skills + '%'});
    
                });
            }
            
            if(jQuery().appear) {
                $('.zt-skill-bar').appear().on('appear', function() {
                    animated_contents();
                });
            } else {
                animated_contents();
            }
        });
    }(jQuery));



        
});



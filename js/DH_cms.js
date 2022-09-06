$(document).ready(function () {
    console.log("cms 불러오기");

    // 달력
    $(function () {
        //input을 datepicker로 선언
        $("#datepicker1, #datepicker2 ").datepicker({
            dateFormat: 'yy-mm-dd' //달력 날짜 형태
            , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서            
            , showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
            , changeMonth: true
            , changeYear: true
            , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif"
            , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함            
            // , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
            , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] // 월의 한글 형식.
            , minDate: "-10Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            , maxDate: "+0Y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)                                      
            , showButtonPanel: true // 캘린더 하단에 버튼 패널을 표시한다. 
            , closeText: '적용'  // 닫기 버튼 패널
            , currentText: '오늘 날짜' // 오늘 날짜로 이동하는 버튼 패널
        });

        //초기값을 오늘 날짜로 설정해줘야 합니다.
        $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
    });

    $('th.order').each(function (column) {
        $(this).click(function () {
            if ($(this).is('.asc')) {
                $(this).removeClass('asc');
                $(this).addClass('desc');
                sortdir = -1;
            } else {
                $(this).addClass('asc');
                $(this).removeClass('desc');
                sortdir = 1;
            }
            $(this).siblings().removeClass('asc');
            $(this).siblings().removeClass('desc');
            var rec = $('table').find('tbody > tr').get();
            rec.sort(function (a, b) {
                var val1 = $(a).children('td').eq(column).text().toUpperCase();
                var val2 = $(b).children('td').eq(column).text().toUpperCase();
                return (val1 < val2) ? -sortdir : (val1 > val2) ? sortdir : 0;
            });
            $.each(rec, function (index, row) {
                $('tbody').append(row);
            });
        });
    });


    //탭메뉴
    $(".tabsArea .tab_content").hide();
    $(".tabsArea .tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    $('.cmsWrap .table_filter .sort span').on('click', function () {
        $(".cmsWrap .table_filter .sort span").removeClass("active");
        $(this).addClass("active");
    });

    // 상단 검색바
    $('.searchArea .searchInput').on("focusout", function () {
        $('.searchArea .sch_autocomplete, .searchArea .AutoComplete').hide();
    });
    $('.searchArea .searchInput').on("keydown", function () {
        console.log("test");
        $(this).next().next('.searchArea .sch_autocomplete, .searchArea .AutoComplete').show();

    });
    $('.searchArea .sch_autocomplete li, .searchArea .AutoComplete li').removeClass('_on');
    $('.searchArea .sch_autocomplete li, .searchArea .AutoComplete li').on("mouseover", function () {
        $('.searchArea .sch_autocomplete li, .searchArea .AutoComplete li').removeClass('_on')
        $(this).addClass('_on');
    });

    // 도움말
    $('.sStokes .formWrap .btn_help').on('click', function () {
        $('#content .sStokes .formWrap .info_box').toggle();
    });

    $('#textBox').keyup(function (e) {
        let content = $(this).val(); // 글자수 세기
        if (content.length == 0 || content == '') {
            $('.textCount').text('0자');
        } else {
            $('.textCount').text(content.length + '자');
        }
    });
    
    // 업로드 이미지 미리보기
    if ($('.fieldset_table ul li.td .comlogo').length) {

        $(function () {
            document.getElementById("files").onchange = function () {
                var reader = new FileReader();

                reader.onload = function (e) {
                    document.getElementById("image").src = e.target.result;
                };
                reader.readAsDataURL(this.files[0]);
            };
        });
        $(function () {
            document.getElementById("files02").onchange = function () {
                var reader = new FileReader();

                reader.onload = function (e) {
                    document.getElementById("image02").src = e.target.result;
                };
                reader.readAsDataURL(this.files[0]);
            };
        });
    }
});

// 초이스스탁US 가입 상세 차트
$(document).ready(function () {
    if ($('#BICchart_structure01').length) {
        Highcharts.chart('BICchart_structure01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#3655D6", "#37C60C", "#FC4F4F"],

            title: {
                text: null,
            },

            legend: {
                reversed: true
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}명',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [
                {
                    name: '기간(6개월)',
                    type: 'column',
                    data: [242, 152],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                },
                {
                    name: '기간(3개월)',
                    type: 'column',
                    data: [142, 152, 142, 152, 142, 152, 142, 152, 142, 152, 142, 152],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                },
                {
                    name: '월자동',
                    type: 'column',
                    data: [42, 52, 42, 52, 42, 52, 42, 52, 42, 52, 42, 52],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                }, 
            ],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_structure02').length) {
        Highcharts.chart('BICchart_structure02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#3655D6", "#37C60C", "#FC4F4F"],

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}명',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [
                {
                    name: '기간(6개월)',
                    type: 'column',
                    data: [242, 152],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                },
                {
                    name: '기간(3개월)',
                    type: 'column',
                    data: [142, 152, 142, 152, 142, 152, 142, 152, 142, 152, 142, 152],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                },
                {
                    name: '월자동',
                    type: 'column',
                    data: [42, 52, 42, 52, 42, 52, 42, 52, 42, 52, 42, 52],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                }, 
            ],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_structure03').length) {
        Highcharts.chart('BICchart_structure03', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#3655D6", "#37C60C", "#FC4F4F"],

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}명',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [
                {
                    name: '기간(6개월)',
                    type: 'column',
                    data: [242, 152],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                },
                {
                    name: '기간(3개월)',
                    type: 'column',
                    data: [142, 152, 142, 152, 142, 152, 142, 152, 142, 152, 142, 152],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                },
                {
                    name: '월자동',
                    type: 'column',
                    data: [42, 52, 42, 52, 42, 52, 42, 52, 42, 52, 42, 52],
                    tooltip: {
                        pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 명</b><br/>'
                    },
                }, 
            ],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
});




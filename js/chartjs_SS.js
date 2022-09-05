$(document).ready(function () {

    //검색결과 차트 - 매출액 & 영업이익 & 순이익
    if ($('#BICchart_profit01').length) {
        Highcharts.chart('BICchart_profit01', {
            chart: {                
                type: 'line',
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
                marginTop: 100,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,                
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '매출액 & 영업이익 & 순이익<br><span>삼성전자 (005930)</span>',
                y: 30,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{    
                categories: ['12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03','12-03'],  
                type: 'datetime',                
                labels: {
                    // formatter: function() {
                    //     return Highcharts.dateFormat('%y', this.value);
                    // },
                    step: 2
                },                
                crosshair: true        
            }],


            yAxis: [{// 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, {// 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '매출액(좌)',
                type: 'column',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f}억원</b><br/>'
                },
            }, {
                name: '영업이익(우)',
                type: 'line',
                yAxis: 1,
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
            }, {
                name: '순이익',
                type: 'line',
                yAxis: 1,
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 1,
                        lineColor: null,
                        radius: 3
                    }
                },                
            },
        });
    }

    if ($('#BICchart_profit02').length) {
        Highcharts.chart('BICchart_profit02', {
            chart: {
                type: 'line',
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
                marginTop: 30,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#f8452c", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['03-24', '03-24','03-24','03-24','03-24','03-24','03-24','03-24','03-24','03-24','03-24','03-24', ],
                crosshair: true,
                labels: {                    
                    style: {
                        color: ["#656d7e"],
                        fontSize: "10px",
                    },
                    step: 2
                },
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}점',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, {// 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#f8452c"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '슈스톡점수',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 점</b><br/>'
                },
            }, {
                name: '주가',
                yAxis: 1,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 1,
                        lineColor: null,
                        radius: 3
                    }
                }
            },
        });
    }
});
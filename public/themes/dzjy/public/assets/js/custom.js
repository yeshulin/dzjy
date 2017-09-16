$(document).ready(function () {
    //动态计算页面最小高度
    var autoFrame = function () {
        //动态获取窗口宽度和高度
        var pageWidth = window.innerWidth, pageHeight = window.innerHeight, minWidth = 1200; minHeight = 650, footerBoxHeight = $(".footerBox").height(), contentBox = $(".contentBox");
        if (typeof pageWidth != "number") {
            if (document.compatMode == "CSS1Compat") {
                pageWidth = document.documentElement.clientWidth;
                pageHeight = document.documentElement.clientHeight;
            }
            else {
                pageWidth = document.body.clientWidth;
                pageHeight = document.body.clientHeight;
            };
        };
        var autoHeight = pageHeight - 284 - footerBoxHeight;
        contentBox.css("min-height", autoHeight);
    };
    //autoFrame();//初始化
    window.onresize = autoFrame;//窗口尺寸变化调用
    window.onload = autoFrame;//页面刷新调用


    //链接动画
    var fadeFilter = $(".fadeFilter");
    fadeFilter.mouseover(function () {
        $(this).stop().fadeTo("normal", 0.7);
    });
    fadeFilter.mouseout(function () {
        $(this).stop().fadeTo("normal", 1.0);
    });

    //登录图标和按钮动画
    var loginInput = $(".loginInput"), loginBtn = $(".loginBtn");
    loginInput.mouseover(function () {
        $(this).find("i").stop().animate({
            top: "-26px"
        },200);
    });
    loginInput.mouseout(function () {
        $(this).find("i").stop().animate({
            top: "0px"
        },200);
    });
    loginBtn.mouseover(function () {
        $(this).find("span").stop().animate({
            left: "0px"
        }, 300);
    });
    loginBtn.mouseout(function () {
        $(this).find("span").stop().animate({
            left: "-118px"
        }, 300);
    });

    //导航动画
    $(".myNav > ul > li a").mouseover(function () {
        $(this).find("strong").stop().animate({
            top: "-100%"
        }, 200)
        $(".myNav > ul > li > ul").css("display", "none")
        $(this).next("ul").stop().fadeIn(300);
    })
    $(".myNav > ul > li > ul").mouseover(function () {
        $(this).stop().fadeIn(0);
        $(this).css("display", "block");
    })
    $(".myNav > ul > li > ul").mouseout(function () {
        //$(this).stop().fadeIn(0);
        $(this).css("display", "none");

    })
    $(".myNav > ul > li a").mouseout(function () {
        $(this).find("strong").stop().animate({
            top: "0px"
        }, 200)
        $(this).next("ul").stop().fadeOut(300);

    })

    //events动画
    $(".eventsList > ul > li > a").mouseover(function () {
        $(this).find("strong").stop().animate({
            left: "0%"
        }, 200)
    })
    $(".eventsList > ul > li > a").mouseout(function () {
        $(this).find("strong").stop().animate({
            left: "100%"
        }, 200)
    })


    //年月日
    var myDate = new Date();
    var showMyDate = myDate.getFullYear() + "年" + (myDate.getMonth() + 1) + "月" + myDate.getDate() + "日";
    $(".showDate").text(showMyDate);

    //周
    var a = new Array("日", "一", "二", "三", "四", "五", "六");
    var week = new Date().getDay();
    var myWeek = "星期" + a[week];
    $(".showWeek").text(myWeek);

    //主页图标动画
    $(".serviceBox > a").mouseover(function () {
        $(this).find("span").stop().animate({
            opacity: "1.0"
        }, 300)
        $(this).find("em").stop().animate({
            top: "-260px"
        }, 300)
    })
    $(".serviceBox > a").mouseout(function () {
        $(this).find("span").stop().animate({
            opacity: "0.0"
        }, 300)
        $(this).find("em").stop().animate({
            top: "0px"
        }, 300)
    })



    //应用图标列表动画
    $(".appIcoList > a,.appIcoList01 > li").mouseover(function () {
        //$(this).find("span").stop().animate({
        //    opacity: "0.7"
        //}, 200)
        $(this).find("em").stop().animate({
            top: "-100%"
        }, 200)

    })
    $(".appIcoList > a,.appIcoList01 > li").mouseout(function () {
        //$(this).find("span").stop().animate({
        //    opacity: "1.0"
        //}, 200)
        $(this).find("em").stop().animate({
            top: "0%"
        }, 200)
    })

    //列表动画
    $(".noteList ul > li").mouseover(function () {
        $(this).find("span").stop().animate({
            top: "0%"
        }, 100)
    })
    $(".noteList ul > li").mouseout(function () {
        $(this).find("span").stop().animate({
            top: "100%"
        }, 100)
    })
    //搜索图标动画
    $(".mySerach > a").mouseover(function () {
        $(this).find("span").stop().animate({
            left: "0px"
        }, 200)
    })
    $(".mySerach > a").mouseout(function () {
        $(this).find("span").stop().animate({
            left: "-20px"
        }, 200)
    })



    //限制字符个数
    $(".limit08,.wordLimit").each(function () {
        var maxwidth = 8;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "…");
        }
    });
    //限制字符个数
    $(".limit24").each(function () {
        var maxwidth = 24;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "…");
        }
    });
    $(".limit03").each(function () {
        var maxwidth = 160;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "…");
        }
    });


    //选择控件
    $(".mySelectBox >a").click(function () {
        $(this).next("ul").stop().slideToggle(200)
    });
    $(".selectList > li > a").click(function () {
        $(this).parents("ul").hide();
        var currentValue = $(this).find("span").text();
        $(this).parents("ul").prev("a").find("em").html(currentValue);
    });
    //用户选中
    $(".userList > a").click(function () {
        $(this).parent().children("a").removeClass("userListCurrent");
        $(this).addClass("userListCurrent");

    })


    //展开/关闭人员列表
    $(".personListContent > h1").click(function () {
        $(this).children("b").toggleClass("bClose");
        $(this).next().stop().slideToggle(300);
        return false;
    })

    //backTop
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $(".backTop").fadeIn(300);
            }
            else {
                $(".backTop").stop().fadeOut(300);
            }
        });
    });
    $(".backTop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

//2017.6.22 发光效果函数
    var light = $(".light");
    function animateBtn() {
        light.animate({
            opacity: '0.4'
        }, 1500);
        light.animate({
            opacity: '1.0'
        }, 1500);
    };
    function Start() {
        setInterval(animateBtn, 1000);
    };
    setTimeout(Start, 0);//延迟7秒开始周期回调






});

// $(document).ready(function () {
//     //动态计算页面最小高度
//     var autoFrame = function () {
//         //动态获取窗口宽度和高度
//         var pageWidth = window.innerWidth, pageHeight = window.innerHeight, minWidth = 1200; minHeight = 650, footerBoxHeight = $(".footerBox").height(), contentBox = $(".contentBox");
//         if (typeof pageWidth != "number") {
//             if (document.compatMode == "CSS1Compat") {
//                 pageWidth = document.documentElement.clientWidth;
//                 pageHeight = document.documentElement.clientHeight;
//             }
//             else {
//                 pageWidth = document.body.clientWidth;
//                 pageHeight = document.body.clientHeight;
//             };
//         };
//         var autoHeight = pageHeight - 284 - footerBoxHeight;
//         contentBox.css("min-height", autoHeight);
//     };
//     //autoFrame();//初始化
//     window.onresize = autoFrame;//窗口尺寸变化调用
//     window.onload = autoFrame;//页面刷新调用
//
//
//     //链接动画
//     var fadeFilter = $(".fadeFilter");
//     fadeFilter.mouseover(function () {
//         $(this).stop().fadeTo("normal", 0.7);
//     });
//     fadeFilter.mouseout(function () {
//         $(this).stop().fadeTo("normal", 1.0);
//     });
//
//     //登录图标和按钮动画
//     var loginInput = $(".loginInput"), loginBtn = $(".loginBtn");
//     loginInput.mouseover(function () {
//         $(this).find("i").stop().animate({
//             top: "-26px"
//         },200);
//     });
//     loginInput.mouseout(function () {
//         $(this).find("i").stop().animate({
//             top: "0px"
//         },200);
//     });
//     loginBtn.mouseover(function () {
//         $(this).find("span").stop().animate({
//             left: "0px"
//         }, 300);
//     });
//     loginBtn.mouseout(function () {
//         $(this).find("span").stop().animate({
//             left: "-118px"
//         }, 300);
//     });
//
//     //导航动画
//     $(".myNav > ul > li a").mouseover(function () {
//         $(this).find("strong").stop().animate({
//             top: "-100%"
//         }, 200)
//         $(".myNav > ul > li > ul").css("display", "none")
//         $(this).next("ul").stop().fadeIn(300);
//     })
//     $(".myNav > ul > li > ul").mouseover(function () {
//         $(this).stop().fadeIn(0);
//         $(this).css("display", "block");
//     })
//     $(".myNav > ul > li > ul").mouseout(function () {
//         //$(this).stop().fadeIn(0);
//         $(this).css("display", "none");
//
//     })
//     $(".myNav > ul > li a").mouseout(function () {
//         $(this).find("strong").stop().animate({
//             top: "0px"
//         }, 200)
//         $(this).next("ul").stop().fadeOut(300);
//
//     })
//
//     //events动画
//     $(".eventsList > ul > li > a").mouseover(function () {
//         $(this).find("strong").stop().animate({
//             left: "0%"
//         }, 200)
//     })
//     $(".eventsList > ul > li > a").mouseout(function () {
//         $(this).find("strong").stop().animate({
//             left: "100%"
//         }, 200)
//     })
//
//
//     //年月日
//     var myDate = new Date();
//     var showMyDate = myDate.getFullYear() + "年" + (myDate.getMonth() + 1) + "月" + myDate.getDate() + "日";
//     $(".showDate").text(showMyDate);
//
//     //周
//     var a = new Array("日", "一", "二", "三", "四", "五", "六");
//     var week = new Date().getDay();
//     var myWeek = "星期" + a[week];
//     $(".showWeek").text(myWeek);
//
//     //主页图标动画
//     $(".serviceBox > a").mouseover(function () {
//         $(this).find("span").stop().animate({
//             opacity: "1.0"
//         }, 300)
//         $(this).find("em").stop().animate({
//             top: "-260px"
//         }, 300)
//     })
//     $(".serviceBox > a").mouseout(function () {
//         $(this).find("span").stop().animate({
//             opacity: "0.0"
//         }, 300)
//         $(this).find("em").stop().animate({
//             top: "0px"
//         }, 300)
//     })
//
//
//
//     //应用图标列表动画
//     $(".appIcoList > a,.appIcoList01 > li").mouseover(function () {
//         //$(this).find("span").stop().animate({
//         //    opacity: "0.7"
//         //}, 200)
//         $(this).find("em").stop().animate({
//             top: "-100%"
//         }, 200)
//
//     })
//     $(".appIcoList > a,.appIcoList01 > li").mouseout(function () {
//         //$(this).find("span").stop().animate({
//         //    opacity: "1.0"
//         //}, 200)
//         $(this).find("em").stop().animate({
//             top: "0%"
//         }, 200)
//     })
//
//     //列表动画
//     $(".noteList ul > li").mouseover(function () {
//         $(this).find("span").stop().animate({
//             top: "0%"
//         }, 100)
//     })
//     $(".noteList ul > li").mouseout(function () {
//         $(this).find("span").stop().animate({
//             top: "100%"
//         }, 100)
//     })
//     //搜索图标动画
//     $(".mySerach > a").mouseover(function () {
//         $(this).find("span").stop().animate({
//             left: "0px"
//         }, 200)
//     })
//     $(".mySerach > a").mouseout(function () {
//         $(this).find("span").stop().animate({
//             left: "-20px"
//         }, 200)
//     })
//
//
//
//     //限制字符个数
//     $(".limit08,.wordLimit").each(function () {
//         var maxwidth = 8;
//         if ($(this).text().length > maxwidth) {
//             $(this).text($(this).text().substring(0, maxwidth));
//             $(this).html($(this).html() + "…");
//         }
//     });
//     //限制字符个数
//     $(".limit24").each(function () {
//         var maxwidth = 24;
//         if ($(this).text().length > maxwidth) {
//             $(this).text($(this).text().substring(0, maxwidth));
//             $(this).html($(this).html() + "…");
//         }
//     });
//     $(".limit03").each(function () {
//         var maxwidth = 160;
//         if ($(this).text().length > maxwidth) {
//             $(this).text($(this).text().substring(0, maxwidth));
//             $(this).html($(this).html() + "…");
//         }
//     });
//
//
//     //选择控件
//     $(".mySelectBox >a").click(function () {
//         $(this).next("ul").stop().slideToggle(200)
//     });
//     $(".selectList > li > a").click(function () {
//         $(this).parents("ul").hide();
//         var currentValue = $(this).find("span").text();
//         $(this).parents("ul").prev("a").find("em").html(currentValue);
//     });
//     //用户选中
//     $(".userList > a").click(function () {
//         $(this).parent().children("a").removeClass("userListCurrent");
//         $(this).addClass("userListCurrent");
//
//     })
//
//
//     //展开/关闭人员列表
//     $(".personListContent > h1").click(function () {
//         $(this).children("b").toggleClass("bClose");
//         $(this).next().stop().slideToggle(300);
//         return false;
//     })
//
//     //backTop
//     $(function () {
//         $(window).scroll(function () {
//             if ($(window).scrollTop() > 200) {
//                 $(".backTop").fadeIn(300);
//             }
//             else {
//                 $(".backTop").stop().fadeOut(300);
//             }
//         });
//     });
//     $(".backTop").click(function () {
//         $('html, body').animate({ scrollTop: 0 }, 500);
//     });
//
//
//
//
//
//
//
//
// });
//

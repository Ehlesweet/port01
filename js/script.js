$(document).ready(function(){

    //클릭 이벤트에 의한 우측의 숨겨진 메뉴 가져오기
    $(".res_btn").click(function(){
        $(".res_menu").addClass("active");
    });
    $(".close_btn").click(function(){
        $(".res_menu").removeClass("active");
    });

    //자동슬라이드
    var $slide = $("#slider .slides .slide");
    var currentSlide = 0;
    function progress(){
        $("#slider .progress_bar").addClass("active");
    };
    progress();

    setInterval(function(){
        var $pause = $("#slider").hasClass("pause");
        if($pause == true){
        }else{
            var $show = $("#slider .slides .slide.show").index();
            $("#slider .slides .slide").removeClass("show");
            $("#slider ol li").removeClass("active");
            if($show == $slide.length - 1){
                $("#slider .slides .slide").eq(0).addClass("show");
                $("#slider ol li").eq(0).addClass("active");
            }else{
                $("#slider .slides .slide").eq($show).next().addClass("show");
                $("#slider ol li").eq($show).next().addClass("active");
            }
            $("#slider .progress_bar").removeClass("active");
            setTimeout(function(){
                progress();
            },500);
        }
    },4000);

    //마우스오버로 슬라이드 멈추기
    $("#slider").hover(function(){
        $(this).addClass("pause");
    },function(){
        $(this).removeClass("pause");
    });

    //슬라이드화살표
    //prev
    $("#slider .prev").click(function(){
        var $now = $("#slider .slides .slide.show").index();
        $("#slider .slides .slide").removeClass("show");
        $("#slider ol li").removeClass("active");

        if($now == 0){
            $("#slider .slides .slide").eq($slide.length -1).addClass("show");
            $("#slider ol li").eq($slide.length -1).addClass("active");
        }else{
            $("#slider .slides .slide").eq($now).prev().addClass("show");
            $("#slider ol li").eq($now).prev().addClass("active");
        }
        $("#slider .progress_bar").removeClass("active");
        setTimeout(function(){
            progress();
        },500);
        return false;
    });
    

    
    //next 버튼
    $("#slider .next").click(function(){
        var $now = $("#slider .slides .slide.show").index();
        $("#slider .slides .slide").removeClass("show");
        $("#slider ol li").removeClass("active");

        if($now == $slide.length -1){
            $("#slider .slides .slide").eq(0).addClass("show"); 
            $("#slider ol li").eq(0).addClass("active");
        }else{
            $("#slider .slides .slide").eq($now).next().addClass("show");
            $("#slider ol li").eq($now).next().addClass("active");
        }      
        $("#slider .progress_bar").removeClass("active");
        setTimeout(function(){
            progress();
        },500); 
        return false;
    });
     
    //슬라이드 하단 버튼
    $("#slider ol li").click(function(){
        var $index = $(this).index();
        $("#slider ol li").removeClass("active");
        $(this).addClass("active");
        $("#slider .slides .slide").removeClass("show");
        $("#slider .slides .slide").eq($index).addClass("show");
        $("#slider .progress_bar").removeClass("active");
        setTimeout(function(){
            progress();
        },500);
    });
    

//이어서


});

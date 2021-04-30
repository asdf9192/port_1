;(function($){

  var earlybird = {      
     btn: 0,
       
    init: function(){
      this.scrollEventFn();
      this.headerFn();
      this.section1Fn();
      this.section2Fn();
      this.section3Fn();
      this.section4Fn();
      this.section5Fn();
      this.section6Fn();
      this.section7Fn();
      this.section8Fn();
      this.section9Fn();
      this.section10Fn();
      this.footerFn();
      this.smoothScrollFn();
      this.demoModalFn();
    },
    scrollEventFn: function(){
      var scrollOld = 0;
      var scrollNew = 0;
      var $win      = $(window);
      var result    = null;
      var $header   = $('#header');
      var that = this; 

        function scrollEventfn(){

          scrollNew = $win.scrollTop();
                 
          var scr  = function(){
            result = scrollOld-scrollNew > 0 ? 'UP' : 'DOWN';                        
          }
                  
          scr();                  
                  
          if( $win.scrollTop() == 0 ){
            $header.removeClass('addHide');
            $header.removeClass('addBlack');
            $header.removeClass('addWhite');
          }
          else{
            if(result == 'UP'){
              if( that.btn == 1 ){
                $header.removeClass('addHide');
                $header.addClass('addBlack');
                $header.addClass('addWhite');
              }
              else{
                $header.removeClass('addWhite');
                $header.removeClass('addHide');
                $header.addClass('addBlack');
              }

            }
            if(result == 'DOWN'){
              if( that.btn == 1 ){
                $header.removeClass('addBlack');
                $header.removeClass('addHide'); 
                $header.addClass('addWhite');
              }
              else{
                $header.removeClass('addWhite');
                $header.removeClass('addBlack');
                $header.addClass('addHide');   
              }
            }
          }
                  scrollOld = scrollNew;
        }

        $win.scroll(function(){
          scrollEventfn();
        });
        
    },
    headerFn:function(){

      //메인메뉴, 서브메뉴 객체와 배열
      var lithoNav = {
        sub1:[
          {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
          {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
          {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
          {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
        ],
        sub2:[
          {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
          {sub:"Services", subsub:["Our services","What we offer","Our process"]},
          {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
          {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
        ],
        sub3:[
          {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
          {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
          {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
          {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
          {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
          {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
          {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
          {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
        ],
        sub4:[
          {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
          {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
          {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
          {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
        ],
        sub5:[
          {
            sub:"Header and menu",
            subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
            subsubsub:{
              subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu hal"],
              subsubsub2:["Left menu classic","Left menu modern"],
              subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
              subsubsub4:["Classic","Modern","Full screen"]
            }               
          },
          {
            sub:"Footer", 
            subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
          },
          {
            sub:"Page title", 
            subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
          },
          {
            sub:"Modal popup", 
            subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
          },
          {
            sub:"Icon packs", 
            subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
          },
          {
            sub:"Animations"
          }
        ], 
        sub6:[
          {sub:"Blog grid"},                      
          {sub:"Blog masonry"},                      
          {sub:"Blog classic"},                      
          {sub:"Blog simple"},                      
          {sub:"Blog side image"},                      
          {sub:"Blog metro"},                      
          {sub:"Blog overlay image"},                      
          {sub:"Blog modern"},                      
          {sub:"Blog clean"},                      
          {sub:"Blog widget"},                      
          {sub:"Blog standard"},                      
          {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},                      
          {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width pos"]},                      
        ],
        sub7:[
          {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
          {sub:["menu-banner-01.jpg"]},
          {sub:["menu-banner-02.jpg"]}
        ]
      }

      function subObjectArrayFn(){

        // sub1
        var $col = $('#nav .col');
        var txt = '';

          for(var i in lithoNav.sub1){
            for(var j in lithoNav.sub1[i].sub){
              if(j==0){
                txt =  "<dt>" + lithoNav.sub1[i].sub[j] + "</dt>";
              }
              else{
                txt += "<dd><a href='#'>" + lithoNav.sub1[i].sub[j] + "</a></dd>";
              }
            }
            $col.eq(i).html( txt );
            txt ='';
          }

        // sub2
        var $subBtn = $('.sub2 .sub-btn');
        var $subsubUl = $('.sub2 .subsub');

          for(var i in lithoNav.sub2){
            txt = lithoNav.sub2[i].sub;            
            imsi = $subBtn.eq(i).html();
            txt += imsi;
            $subBtn.eq(i).html(txt);
            txt = '';
          }

          //subsub
          for(var i in lithoNav.sub2){
            for(var j in lithoNav.sub2[i].subsub){
              txt += "<li><a href='#'>" + lithoNav.sub2[i].subsub[j] + "</a></li>"
            }
            $subsubUl.eq(i).html(txt);
            txt = "";  
          }

        // sub3 
        var $sub3Btn =  $('.sub3 .sub-btn');
        var $sub3Sub =  $('.sub3 .subsub');
        var imsi = '';

          for(var i in lithoNav.sub3){
            txt = lithoNav.sub3[i].sub;
            imsi = $sub3Btn.eq(i).html();
            txt += imsi;
            $sub3Btn.eq(i).html( txt );
            txt = '';  
          }

          for(var i in lithoNav.sub3){
            for(var j in lithoNav.sub3[i].subsub){
              txt += "<li><a href='#'>"+lithoNav.sub3[i].subsub[j]+"</a></li>";
            }
            $sub3Sub.eq(i).html(txt);
            txt = '';
          }
                        
        // sub4
        var $sub4Menu = $('.sub4 .sub-menu');

          for(var i in lithoNav.sub4){
            for(var j in lithoNav.sub4[i].sub){
              if(j==0){
                txt += "<dt>" + lithoNav.sub4[i].sub[j] + "</dt>";
              }
              else{
                txt += "<dd><a href='#'>" + lithoNav.sub4[i].sub[j] + "</a></dd>";
              }
            }
            $sub4Menu.eq(i).html( txt );
            txt ='';
          }

        // sub5
        var $sub5Btn = $('.sub5 .sub-btn');    
        var $sub5Menu = $('.sub5 .sub-menu');    
                        
          for(idx in lithoNav.sub5){
            txt = lithoNav.sub5[idx].sub;
            imsi = $sub5Btn.eq(idx).html();
            txt += imsi;
            $sub5Btn.eq(idx).html(txt);
            txt = '';

            if(idx==0){

              for(i in lithoNav.sub5[idx].subsub){
                if(i < 9){
                  txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>";
                }
                else{
                  txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"<i class='fas fa-angle-right'></i></a></li>";
                }
                              
              }                   
              $sub5Menu.eq(idx).html(txt);
              txt = '';
    
              // subsubsub menu 10
              txt += $('.sub5-sub1>div>ul>li').eq(9).html();                    
              txt += "<div class='sub-sub-sub  sub5-sub1-sub10'>";
              txt += "  <div class='sub-sub-sub-gap'>";
              txt += "      <ul>";
              txt += "          <li><a href='#'>Hamburger menu</a></li>";
              txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
              txt += "          <li><a href='#'>Hamburger menu half</a></li>";
              txt += "      </ul>";
              txt += "  </div>";
              txt += "</div>";
              $('.sub5-sub1>div>ul>li').eq(9).html( txt );
              txt = '';                        
    
    
              // subsubsub menu 11
              txt += $('.sub5-sub1>div>ul>li').eq(10).html();                     
              txt += "<div class='sub-sub-sub  sub5-sub1-sub11'>";
              txt += "  <div class='sub-sub-sub-gap'>";
              txt += "      <ul>";
              txt += "          <li><a href='#'>Hamburger menu</a></li>";
              txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
              txt += "      </ul>";
              txt += "  </div>";
              txt += "</div>";
              $('.sub5-sub1>div>ul>li').eq(10).html( txt );
              txt = '';
    
              // subsubsub menu 12
              txt += $('.sub5-sub1>div>ul>li').eq(11).html();                  
              txt += "<div class='sub-sub-sub  sub5-sub1-sub12'>";
              txt += "  <div class='sub-sub-sub-gap'>";
              txt += "      <ul>";
              txt += "          <li><a href='#'>Hamburger menu</a></li>";
              txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
              txt += "          <li><a href='#'>Hamburger menu half</a></li>";
              txt += "      </ul>";
              txt += "  </div>";
              txt += "</div>";
              $('.sub5-sub1>div>ul>li').eq(11).html( txt );
              txt = '';
    
    
              //subsubsub menu 13
              txt += $('.sub5-sub1>div>ul>li').eq(12).html();                      
              txt += "<div class='sub-sub-sub  sub5-sub1-sub13'>";
              txt += "  <div class='sub-sub-sub-gap'>";
              txt += "      <ul>";
              txt += "          <li><a href='#'>Hamburger menu</a></li>";
              txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
              txt += "          <li><a href='#'>Hamburger menu half</a></li>";
              txt += "      </ul>";
              txt += "  </div>";
              txt += "</div>";
              $('.sub5-sub1>div>ul>li').eq(12).html( txt );
              txt = '';
    
            }
            else if(idx>0 && idx<5){
              for(i in lithoNav.sub5[idx].subsub){
                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>";
              }
              $sub5Menu.eq(idx).html(txt);
              txt = '';    
            }

          }

        // sub6
        var $sub6Btn = $('.sub6 .sub-btn');
        var $ul12 = $('.sub6 .sub6-sub12 ul');
        var $ul13 = $('.sub6 .sub6-sub13 ul');


          for(i in lithoNav.sub6){
            if(i<11){
              $sub6Btn.eq(i).html( lithoNav.sub6[i].sub );
            }
            else{
              $sub6Btn.eq(i).html( lithoNav.sub6[i].sub + "<i class='fas fa-angle-right'></i>" );      
            }
          }                          

          // subsub 12
          for(i in lithoNav.sub6[11].subsub){
            txt += "<li><a href='#'>" + lithoNav.sub6[11].subsub[i] + "</a></li>";   
          }                         
          $ul12.html( txt );
          txt = '';

          // subsub 13
          for(i in lithoNav.sub6[12].subsub){
            txt += "<li><a href='#'>" + lithoNav.sub6[12].subsub[i] + "</a></li>";   
          }                         
          $ul13.html( txt );
          txt = '';


        // sub7
        var $sub7Dl1 = $('.sub7 dl').eq(0);
        var $sub7Img = $('.sub7 dl img');
                          
          for(i in lithoNav.sub7[0].sub){
            if( i==0 || i==6 ){
              txt += "<dt>" + lithoNav.sub7[0].sub[i] + "</dt>";
            }
            else{
              txt += "<dd><a href='#'>" + lithoNav.sub7[0].sub[i] + "</a></dd>";
            }
          }
          $sub7Dl1.html( txt );
          txt = '';


          for(var i=0; i<$sub7Img.length; i++){
            txt = $sub7Img.eq(i).attr('src');
            txt += lithoNav.sub7[i+1].sub[0];
            $sub7Img.eq(i).attr('src', txt );
            txt = '';
          }

      }

      subObjectArrayFn();


      //네비게이션
      var $window    = $(window);
      var $mainBtn   = $('#header .main-btn');
      var $subBtn    = $('#header .sub-btn');
      var $subSubBtn = $('#header .sub-sub-btn');
      var $navUlLi   = $('#header #nav>ul>li');
      var $sub       = $('#header .sub');
      var $subSub    = $('#header .sub-sub');
      var $subSubSub = $('#header .sub-sub-sub');  
      var $mobileBtn = $('#header .mobile-btn');
      var $bar       = $('#header .bar');
      var $nav       = $('#header #nav');
      var pc         = 0;
      var mobile     = 0;
      var $logoImg   = $('#header #logo a img');
      var that = this;

        function pcEventFn(){                    
          $nav.stop().show();
          $sub.stop().hide();
          $subSub.stop().hide();
          $subSubSub.stop().hide();
          $nav.css({display:'inline-block'});

          $logoImg.attr('src','./img/logo-black.png');

          $mainBtn.on({
            mouseenter:function(e){
              e.preventDefault();
              $(this).next().stop().show();
            }
          });

          $navUlLi.on({
            mouseleave:function(e){
              e.preventDefault();
              $sub.stop().hide();
            }
          });                    

          $subBtn.on({
            mouseenter:function(e){
              e.preventDefault();
              $subSub.stop().hide();
              $(this).next().stop().show();
            }
          });

          $navUlLi.on({
            mouseleave:function(e){
              e.preventDefault();
              $subSub.stop().hide();
            }
          });

          $subSubBtn.on({
            mouseenter:function(e){
              e.preventDefault();
              $subSubSub.stop().hide();
              $(this).next().stop().show();
            }
          });

          $subSub.on({
            mouseleave:function(e){
              e.preventDefault();
              $subSubSub.stop().hide();
            }
          });
        }

        function mobileEventFn(){
          $sub.stop().hide();
          $subSub.stop().show();
          $subSubSub.stop().show();
          $bar.removeClass('addMobile');
          $nav.stop().slideUp(0);
                
          $logoImg.attr('src','./img/logo-black.png');

          $mainBtn.off('mouseenter');
          $navUlLi.off('mouseleave');
          $subBtn.off('mouseenter');
          $navUlLi.off('mouseleave');
          $subSubBtn.off('mouseenter');
          $subSub.off('mouseleave');         
        }


        function pcMobileFn(){
          if( $window.innerWidth() > 980 ){                    
            pc=1;
            mobile=0;
            pcEventFn();
            that.btn = 0;
          }
          else{
            pc=0;
            mobile=1;
            mobileEventFn();
          } 
        }

        setTimeout(pcMobileFn,100);
              
        $window.resize(function(){
          pcMobileFn();                  
        });

        mobileEventFn();


        $mainBtn.on({
          click:function(event){
            event.preventDefault();                      
            if(mobile==1){
              $sub.stop().slideUp(300);
              $(this).next().stop().slideToggle(300);
            }                  
          }
        });


        $mobileBtn.on({
          click:  function(event){
            event.preventDefault();
            $bar.toggleClass('addMobile');   
            $nav.stop().slideToggle(300);

            that.btn == 0 ? that.btn = 1 : that.btn = 0;
          }
        });
              
    },
    section1Fn:function(){

      var $slide = $('#section1 .slide');
      var $slideWrap = $('#section1 .slide-wrap');
      var $slideView = $('#section1 .slide-view');
      var $prevBtn = $('#section1 .prev-btn');
      var $nextBtn = $('#section1 .next-btn');

      var touchStart = 0;
      var touchEnd = 0;
      var cnt = 0;
      var n = $('#section1 .slide').length;
      var slideW = $('#section1 .slide').innerWidth();
      var angle = 360/n;
      var tZ = 0;
      var setId = null;
      var setId2 = null;

      
        tZ = Math.round((slideW/2)/Math.tan(Math.PI/n));

        mainSlideFn();

        // 1. 메인 슬라이드 함수
        function mainSlideFn(){

          $slide.stop().animate({opacity:.8},0);          
          $slide.find('.slide-content').css({transform:'scale(1)'});

          $slideWrap.css({transform: 'perspective(' + (tZ*2) + 'px) translateZ(' + (-tZ) + 'px) rotateY('+ (-angle*cnt) +'deg)' });

          $slide.eq(cnt % n).stop().animate({opacity:1},0);
          
          t=0;
        }

        // 2. 다음 슬라이드 카운트 함수
        function nextSlideCountFn(){
          cnt++;
          mainSlideFn();
        }

        // 2. 이전 슬라이드 카운트 함수
        function prevSlideCountFn(){
          cnt--;
          mainSlideFn();
        }


        //3-1. 다음 화살 버튼 클릭 이벤트
        $nextBtn.on({
          click:function(){
            puaseTimerFn()
            nextSlideCountFn();
          }
        });

        //3-2. 이전 화살 버튼 클릭 이벤트
        $prevBtn.on({
          click:function(){
            puaseTimerFn()
            prevSlideCountFn();
          }
        });

        //4. 터치 스와이프
        $slideView.on({
          mousedown: function(e){
            e.preventDefault();
            touchStart = e.pageX;
          },
          mouseup: function(e){
            e.preventDefault();
            touchEnd = e.pageX;
            touchCallFn();
          }
        });
        
        function touchCallFn(){
          if(touchStart>touchEnd){
            nextSlideCountFn();
          }
          if(touchStart<touchEnd){
            prevSlideCountFn();
          }
        }

        // 5. 자동 타이머
        function autoTimerFn(){
          setId = setInterval(nextSlideCountFn, 4000);
        }

        autoTimerFn();


        // 6. 슬라이드 이벤트 발생 시 일시정지
        function puaseTimerFn(){
          var t = 0;
          clearInterval(setId);
          clearInterval(setId2);

          setId2 = setInterval(function(){
            t++;
            if( t >= 5){
              t = 0;
              clearInterval(setId2);
              clearInterval(setId);
              nextSlideCountFn();
              autoTimerFn();
            }
          }, 1000);
        }

    },
    section2Fn:function(){

    },
    section3Fn:function(){
      var $radio = $('input[type="radio"]');
      var $face = $('.face');
      var faceName = '.'+$radio.eq(0).val();

        function faceNameFn(){
          $(faceName).stop().animate({opacity:.1},0).animate({opacity:1},1000);
        }
        setTimeout(faceNameFn,50);

        $radio.each(function(idx){
          $(this).on({
            click:function(){
              $radio.removeClass('addChk');
              $(this).addClass('addChk');

              $face.stop().animate({opacity:.07},100)
              faceName = '.' + $(this).val();
              faceNameFn();
            }
          });
        });
        
    },
    section4Fn:function(){

    },
    section5Fn:function(){

    },
    section6Fn:function(){

    },
    section7Fn:function(){

    },
    section8Fn:function(){

    },
    section9Fn:function(){

    },
    section10Fn:function(){

    },
    footerFn:function(){

    },
    smoothScrollFn:function(){
      var $modalDemo = $('#modalDemo');
      var $goTopBtnWrap = $('.goTopBtn-wrap');
      var $smoothBtn = $('.smoothBtn');
      var t = 0;

        $smoothBtn.on({
          click:function(e){
            e.preventDefault();
            
            var url = $(this).attr('href');
              $('html,body').stop().animate({scrollTop: $( url ).offset().top }, 600, 'easeInOutExpo');
          }

        });


        function resizeFn(){
          if( $(window).innerWidth() > 1200 ){
            $modalDemo.stop().fadeIn(1000);
          }
          else{
            $modalDemo.stop().fadeOut(1000);
          }                  
        }

        resizeFn();
        
        setTimeout(resizeFn, 100);
        
        $(window).resize(function(){
          resizeFn();
        });

        $(window).scroll(function(){
          if( $(this).scrollTop()>=100 ){
            if( t==0 ){
              t=1;
              $goTopBtnWrap.stop().fadeIn(1000);
              resizeFn();
            }                      
          }
          else{
            if( t==1 ){
              t=0;
              $goTopBtnWrap.stop().fadeOut(1000);
            }
          }
        });

    },
    demoModalFn:function(){
      
      var $html       = $('html');
      var $header     = $('#header');
      var $modalDemo  = $('#modalDemo');
      var $modalBtn   = $('.modal-btn');
      var $document   = $(document);

        $modalBtn.on({
          click: function(event){

            event.currentTarget 

            event.stopPropagation();

            $html.toggleClass('addModal');
            $header.toggleClass('addHide');
            $modalDemo.toggleClass('addModal');

          }
        });

        //모달창 전체 이벤트
        $modalDemo.on({
          click:function(event){
              event.stopPropagation();
              return false;
          }
        });

        $document.on({
          click:function(event){
            if( event.target !== event.currentTarget ){
              $html.removeClass('addModal');
              $header.removeClass('addHide');
              $modalDemo.removeClass('addModal');   
            }
          }
        });

    }
  } //객체 끝


  earlybird.init();

})(jQuery);
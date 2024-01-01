$(document).ready(function(){
    $(".ar_header_bars a.arMobileBars2").click(function(){
        $(".ar_header_navbar").slideToggle();
      });


      $(".ar_chatlist_btn.list").click(function(){
        $(".ar_tabTwo").addClass("twotwo");
      });
      $(".ar_chatlist_btn.all").click(function(){
        $(".ar_tabOne").addClass("oneone");
      });

      $(".ar_chatlist_btn.list").click(function(){
        $(".ar_tabOne").removeClass("oneone");
      });

      $(".ar_chatlist_btn.all").click(function(){
        $(".ar_tabTwo").removeClass("twotwo");
      });


      $('.ar_town_carousel_wrapper').owlCarousel({
        items:4,
        dots:false,
        loop:true,
        margin:20,
        nav:true,
        navText:["<img src='assets/images/town/leftarrow.png'>","<img src='assets/images/town/rightarrow.png'>"],
        responsive:{
            0:{
                items:1
            },
            384:{
              items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

      
})
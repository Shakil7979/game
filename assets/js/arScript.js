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

      
})
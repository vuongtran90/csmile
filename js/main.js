
$( document ).ready(function() {

    var str = new Array();
    var length = $('.recent_post').length;
    for(var i=0 ; i<length;i++){
         str.push($('.recent_post_content p').eq(i).text())
    }
    $('.grid_btn').on('click',function(e) {
            $('.recent_posts_top ul li').removeClass('selected')
            $(this).addClass('selected');
            $('.recent_posts_container').addClass('list');

            for(var i=0; i < length;i++){
                $('.list .recent_post_content p').eq(i).text($('.list .recent_post_content p').eq(i).text().substr(0, 125)+'...');
            }
    });
    $('.list_btn').on('click',function(e) {
            $('.recent_posts_top ul li').removeClass('selected')
            $(this).addClass('selected');
            $('.recent_posts_container').removeClass('list');
            for (var i=0 ; i<length ; i++){
            $('.recent_post_content p').eq(i).text(str[i]);
        }
    });
});
 $(window).resize(function() {
  if ($(window).width() < 1140) {
         $('.recent_posts_top ul').css("display","none")
         $('.recent_posts_container').removeClass('list');
  }
  else {
         $('.recent_posts_top ul').css("display","block")
  }
});
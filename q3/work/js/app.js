$('.drawer_button').on('click', function(){
  // ボタンをクリックして
  $(this).toggleClass('active');
  // ボタンに active を追加/削除 
  $('.drawer_nav_wrapper').toggleClass('open');
  // ナビゲーションに open を追加/削除
  $('.drawer_bg').fadeToggle();
  // drawer_bg をフェードイン/フェードアウト
});
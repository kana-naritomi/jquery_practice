$(function() {
  $('.modal_open_button').click(function(){
    // OPENボタンをクリックすると
    $('.modal_win').fadeIn();
    // モーダルウィンドウ、フェードイン
  });
  $('.modal_close_button').click(function(){
    // クローズボタンをクリックすると
    $('.modal_win').fadeOut();
    // モーダルウィンドウ、フェードアウト
  });
});
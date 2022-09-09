$(function() {
  $("ul.dropdwn li").hover(
    // ホバー時に
    function() {
      $(".dropdwn_menu:not(:animated)", this).slideDown();},
    // メニューをスライドダウン
    function() {
      $(".dropdwn_menu", this).slideUp();});
    // 離れた時にメニューをスライドアップ
});
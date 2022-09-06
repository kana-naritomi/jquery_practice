$('.nav li').on('click', function() {
  // ナビゲーションをクリックした時
  let index = $(this).index();
  // index番号取得
  $('.description li').addClass('is-hidden');
  // .descriptionのリストに is-hidden を挿入し非表示
  $('.description li').eq(index).removeClass('is-hidden');
  // .descriptionのリストにindex番号を指定し .is-hidden を削除し表示
});
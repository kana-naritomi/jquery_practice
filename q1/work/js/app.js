// Q1-1 読み込み時に文字の色変化
$('#q1').css('color','#000');

// Q1-2 クリックしてボタンの色変更
$('#q2').on('click', function(){
  //        クリックしたら
  $('#q2').css('background','#dcdcdc');
  // q2のボタンの色を変更
});

// Q1-3 クリックしてフェードアウト
$('#q3').on('click', function(){
  //       クリックしたら
  $('#q3').fadeOut(3000);
  // 3秒かけてフェードアウト
});

// Q1-4 クリックしてサイズ変更
$('#q4').on('click', function(){
  //       クリックしたら
  $('#q4').addClass('large');
  // CSS追加でサイズ変更
});

// Q1-5 クリックしてDOMの挿入
$('#q5').on('click', function(){
  $('#q5').before('DOMの前'),
  // ボタンの前に挿入
  $('#q5').after('DOMの後'),
  // ボタンの後に挿入
  $('#q5').prepend('DOMの中の前'),
  // ボタンの中、Q5の前に挿入
  $('#q5').append('DOMの中の後');
  // ボタンの中、Q5の後に挿入
});

// Q1-6 クリックして移動
$('#q6').on('click', function(){
  $('#q6').animate({
  // アニメーション
    marginTop: '100px',
    marginLeft: '100px'
  }, 2000);
  // 2秒かけて移動
});

// Q1-7 クリックしてidのノードをコンソールで表示
$('#q7').on('click', function(){
  // クリックして
  console.log(q7);
  // コンソールに表示
});

// Q1-8 ホバー時にサイズ変更
$('#q8').on({
  mouseenter: function() {
    $('#q8').addClass('large');},
  // マウスカーソルを乗せた時にサイズ変更
  mouseleave: function() {
    $('#q8').removeClass('large');}
  // 'large'を取り外す
});

// Q1-9 クリックして配列のアラート表示
$('#q9 li').on('click', function(){
  const index = $(this).index();
  alert(index);
  // アラートにindex番号表示
});

// Q1-10 Q10をクリックしてQ11を操作
$('#q10 li').on('click', function(){
  // Q10のリストをクリックしたら
  const index = $(this).index();
  // index番号取得
  $('#q11 li').eq(index).addClass('large-text');
  // index番号を指定してQ11のテキスト拡大
})
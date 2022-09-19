$('.select-box').on('change', function(){
  // セレクトボックスが切り替わったら発動
  let val = $(this).val();
  // 選択した value値 を val へ代入
  let b = $('.food-list li');
  // food-list の li を b へ代入

  $.each($('.food-list li'),function(i, b) {
  if('all' === val){  //all と val が一致した場合 
    $(this).show(); //全ての food-list li を表示
    return true; // true を戻し返す
  };

  let c = $(b).data('category-type');
  // food-list li の category-type を c へ代入
  if(c === val) { // category-type と val を比較
    $(b).show(); // 一致したものを表示
  } else { // それ以外は
    $(b).hide(); // 非表示
  };
  });
  });
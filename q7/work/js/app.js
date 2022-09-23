$('.btn').on('click', function(){ // 「アカウント作成」ボタンをクリックで発動

// 個人情報
  console.log('名字');
  console.log($('#family__name').val());
// コンソールに名字を出力
  console.log('名前');
  console.log($('#given__name').val());
// コンソールに名前を出力
  console.log('生年月日');
  console.log($('.year').val() + '年' +
    $('.month').val() + '月' +
    $('.day').val() + '日');
// コンソールに生年月日を出力
  console.log('性別');
  console.log($('[name="gender"]:checked').val());
// コンソールに性別を出力
  console.log('職業');
  console.log($('.occupation').val());
// コンソールに職業を出力

// アカウント情報
  console.log('アカウント名');
  console.log($('#account__name').val());
// コンソールにアカウント名を出力
  console.log('メールアドレス');
  console.log($('#email').val());
// コンソールにメールアドレスを出力
  console.log('パスワード');
  console.log($('#password').val());
// コンソールにパスワードを出力
  console.log('確認用パスワード');
  console.log($('#duplication__password').val());
// コンソールに確認用パスワードを出力

// 連絡先
  console.log('住所');
  console.log($('#address').val());
// コンソールに住所を出力
  console.log('電話番号');
  console.log($('#tel').val());
// コンソールに電話番号を出力

// 購読情報　をコンソールへ出力
  console.log('購読情報');
  $('[name="subscription"]:checked').each(function(){
    console.log($(this).val());
  });
})
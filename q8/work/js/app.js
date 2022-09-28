$(function() {

  let prevSearchWord = null;
  let searchWord = null;
  let pageCount = "1"; // pageCount の初期値
  
  // 検索ボタンをクリックで発動
  $('.search-btn').on('click', function(){
    let searchWord = $('#search-input').val(); // 入力した内容をsearchWordへ代入

    if (prevSearchWord !== null && prevSearchWord === searchWord) {
      // 同じ検索ワードで検索を行う場合は、pageCountに+1する。違う検索ワードの場合は1に戻す
      pageCount ++ ;
    } else {
      pageCount = 1 ;
    };
    prevSearchWord = searchWord ;
  });



// API
const settings = {
  "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
  "method": "GET",
}
$.ajax(settings).done(function (response) {
  const result = response['@graph'];
  displayResult(result)
}).fail(function (err) {
  displayError(err)
});

});


  // 通信成功
function displayResult(response){
  console.log(response);
  alert('API成功！');
}
  // 通信失敗
function displayError(err){

  }

document.addEventListener('DOMContentLoaded', function() {
  // 答え
  let kotae = Math.floor(Math.random() * 10) + 1;
  console.log('答え（デバッグ用）: ' + kotae);

  // 入力回数（予想回数）
  let kaisu = 1;

  // 予想ボタンをクリックしたときの処理
  document.getElementById('guessButton').addEventListener('click', function() {
    // 予想した数字を取得
    let guessInput = document.getElementById('guessInput');
    let yoso = parseInt(guessInput.value);

    let SpanKaisu = document.querySelector('span#kaisu');
    SpanKaisu.textContent = kaisu;

    let SpanAnswer = document.querySelector('span#answer');
    SpanAnswer.textContent = yoso;

    let SpanResult = document.querySelector('p#result');

    if (kaisu < 3) {
      if (yoso === kotae) {
        SpanResult.textContent = 'せいかーい。おめでとう！';
      } else {
        if (yoso < kotae) {
          SpanResult.textContent = 'ザンネーン！答えはもっと大きいよ。';
        } else {
          SpanResult.textContent = 'ザンネーン！答えはもっと小さいよ。';
        }
      }
    } else if (kaisu === 3) {
      if (yoso === kotae) {
        SpanResult.textContent = 'せいかーい。おめでとうございます！';
      } else {
        SpanResult.textContent = 'ザンネーン！答えは' + kotae + 'でした〜';
      }
    } else if (kaisu > 3) {
      SpanResult.textContent = 'もうゲームは終わってるよ。答えは' + kotae + 'でした〜';
    }
    kaisu = kaisu + 1;
  });
});

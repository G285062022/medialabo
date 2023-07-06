let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

let button = document.querySelector('#guess-button');
button.addEventListener('click', hantei);

function hantei() {
  let input = document.querySelector('#guess-input');
  let yoso = parseInt(input.value);
  kaisu += 1;
  let k1 = document.querySelector('span#kaisu');
  k1.textContent = kaisu;
  let k2 = document.querySelector('span#answer');
  k2.textContent = yoso;
  console.log(kaisu + '回目の予想:' + yoso);
  let p1 = document.querySelector('p#result');

  if (kaisu >= 4) {
    p1.textContent = '答えは' + kotae + 'でした．すでにゲームは終わっています';
    console.log('答えは' + kotae + 'でした．すでにゲームは終わっています');
  } else if (kaisu == 3 && kotae != yoso) {
    p1.textContent = 'ザンネーン答えは' + kotae + 'です．';
    console.log('ザンネーン答えは' + kotae + 'です．');
  } else if (kaisu == 3 && kotae == yoso) {
    p1.textContent = '正解です.おめでとう!';
    console.log('正解です.おめでとう!');
  } else {
    if (yoso > kotae) {
      p1.textContent = 'ザンネーン.答えはもっと小さいですよ';
      console.log('ザンネーン.答えはもっと小さいですよ');
    } else if (yoso < kotae) {
      p1.textContent = 'ザンネーン.答えはもっと大きいですよ';
      console.log('ザンネーン.答えはもっと大きいですよ');
    } else {
      p1.textContent = '正解です.おめでとう!';
      console.log('正解です.おめでとう!');
    }
  }
}

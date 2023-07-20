document.addEventListener('DOMContentLoaded', function () {
  let b1 = document.querySelector('button#print');
  b1.addEventListener('click', iroiro);
});

function iroiro() {
  let i = document.querySelector('input[name="basho"]');
  let g = i.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + g + '.json';
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  let p1 = document.querySelector('p#name');
  p1.textContent = ("都市名: " + data.name);

  let p2 = document.querySelector('p#temp_max');
  p2.textContent = ("最高気温: " + data.main.temp_max + "℃ ");

  let p3 = document.querySelector('p#temp_min');
  p3.textContent = ("最低気温: " + data.main.temp_min + "℃");

  let p4 = document.querySelector('p#humidity');
  p4.textContent = ("湿度: " + data.main.humidity + "% ");
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}

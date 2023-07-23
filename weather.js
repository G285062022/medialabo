let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', iroiro);

function iroiro() {
  let cityId = document.getElementById('city-id').value.trim();
  if (cityId === '') {
    console.log('都市のIDを入力してください');
    return;
  }

  let url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;

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
  console.log(data);

  
  let p1 = document.querySelector('p#name');
  p1.textContent = "都市名: " + data.name;

  let p2 = document.querySelector('p#temp_max');
  p2.textContent = "最高気温: " + data.main.temp_max + "℃ ";

  let p3 = document.querySelector('p#temp_min');
  p3.textContent = "最低気温: " + data.main.temp_min + "℃";

  let p4 = document.querySelector('p#situ');
  p4.textContent = "湿度: " + data.main.humidity + "% ";

 
  let p5 = document.querySelector('p#lat');
  p5.textContent = "緯度: " + data.coord.lat;

  let p6 = document.querySelector('p#lon');
  p6.textContent = "経度: " + data.coord.lon;

  let p7 = document.querySelector('p#weather');
  p7.textContent = "天気: " + data.weather[0].description;

  let p8 = document.querySelector('p#wind_speed');
  p8.textContent = "風速: " + data.wind.speed + " m/s";

  let p9 = document.querySelector('p#wind_deg');
  p9.textContent = "風向: " + data.wind.deg + "°";
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}

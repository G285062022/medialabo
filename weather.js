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



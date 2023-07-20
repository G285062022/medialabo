let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', iroiro);

function iroiro() {
  let cityId = document.getElementById('city-id').value.trim(); // Add trim() to remove any leading/trailing spaces
  if (cityId === '') {
    console.log('都市のIDを入力してください'); // Log an error message if the input is empty
    return;
  }

  let url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// Rest of the showResult, showError, and finish functions remain unchanged

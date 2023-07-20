// Get the button element and add a click event listener
let b1 = document.querySelector('button#print');
b1.addEventListener('click', iroiro);

// Function to fetch weather data and update the HTML elements
function iroiro() {
  let i = document.querySelector('input[name="basho"]');
  let g = i.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + g + '.json';

  // Use Axios to perform the API request
  axios.get(url)
    .then(showResult) // On successful response, call showResult function
    .catch(showError) // On error, call showError function
    .then(finish);    // After the request, call finish function
}

// Function to update the HTML elements with weather data
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  let p1 = document.querySelector('p#name');
  p1.textContent = "都市名: " + data.name;

  let p2 = document.querySelector('p#temp_max');
  p2.textContent = "最高気温: " + data.main.temp_max + "℃";

  let p3 = document.querySelector('p#temp_min');
  p3.textContent = "最低気温: " + data.main.temp_min + "℃";

  let p4 = document.querySelector('p#situ');
  p4.textContent = "湿度: " + data.main.humidity + "%";
}

// Function to handle API request errors
function showError(err) {
  console.log(err);
}

// Function to perform any final actions after the API request is complete
function finish() {
  console.log('Ajax 通信が終わりました');
}

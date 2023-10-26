// Body Header 

let body = document.querySelector('body')
let textContainer = document.createElement('div')
body.appendChild(textContainer);
textContainer.setAttribute('class', 'text-container')
textContainer.innerHTML = `<div class="text-row">
<div class="row justify-content-md-center">
    <h1 class="text-center"id="title">Weather data of Rest countries</h1>

</div>
</div>`

// Creating Container

let container = document.createElement('div')
body.appendChild(container)
container.setAttribute('class', 'container')
let row = document.createElement('div')
container.appendChild(row)
row.setAttribute('class','row')

// fetching API link

let key='ff8fb175797f570555c03984926c3287'
fetch("https://restcountries.com/v2/all").then((data)=>data.json()).then((data)=>{
for(let i=0;i<data.length;i++){
// console.log(data);
  // Card Head

let col = document.createElement('div')
row.appendChild(col)
col.setAttribute('class','col-sm-6 col-md-4 col-lg-4 col-xl-4')

let card = document.createElement('div');
card.classList.add('card')
card.setAttribute('class', 'card h-100')

  // let Hcard = document.createElement('div')
  // card.appendChild(Hcard)
  // Hcard.setAttribute('class','h-100')

  let cardHead = document.createElement('div')
  card.appendChild(cardHead)
  cardHead.setAttribute('class','card-header')

  let country = document.createElement('h5');
  country.textContent = data[i].name;
  cardHead.appendChild(country)
  country.setAttribute('class','card-header')

  // Card-Image
  let imgBody = document.createElement('div')
  card.appendChild(imgBody)
  imgBody.setAttribute('class','img-body')

  let imgCon = document.createElement('div')
  imgBody.appendChild(imgCon)
  imgCon.setAttribute('class','img-con')

  let flag = document.createElement('img');
  flag.src=data[i].flag;
  imgCon.appendChild(flag)
  flag.setAttribute('width','100px')
  flag.setAttribute('class', "card-img-top")

let cardBody = document.createElement('div')
card.appendChild(cardBody)
cardBody.setAttribute('class','card-body')

let cardText = document.createElement('div')
cardBody.appendChild(cardText)
cardText.setAttribute('class','card-text')

  let capital = document.createElement('p');
  capital.textContent = `Capital: ${data[i].capital}`;
  cardText.appendChild(capital)

  
  let region = document.createElement('p');
  region.textContent = `Region: ${data[i].region}`;
  cardText.appendChild(region)

  
  let countrycode = document.createElement('p');
  countrycode.textContent = `Country Code: ${data[i].alpha3Code}`;
  cardText.appendChild(countrycode)

  let latlng = document.createElement('p');
  latlng.textContent = `latlng: ${data[i].latlng}° deg`;
  cardText.appendChild(latlng)


  
  let button = document.createElement('button');
  button.textContent = 'Click for weather'
  card.appendChild(button)

  button.setAttribute("class","btn btn-primary")

  button.addEventListener('click', function(){
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${data[i].latlng[0]}&lon=${data[i].latlng[1]}&appid=${key}`
  fetch(url).then((data1)=>data1.json()).then((data2)=>{
    // console.log(data2)


let temperature = document.createElement('span');
temperature.textContent = `Temperature  : ${data2.main.temp} ℃`;
card.appendChild(temperature)

let wind = document.createElement('span');
wind.textContent = `Wind  : ${data2.wind.speed} km/h`;
card.appendChild(wind)

let humidity = document.createElement('span');
humidity.textContent = `Humidity  : ${data2.main.humidity} g/kg`;
card.appendChild(humidity)

let pressure = document.createElement('span');
pressure.textContent = `Pressure  : ${data2.main.pressure} Pa`;
card.appendChild(pressure)

let description = document.createElement('span');
description.textContent = `Description  : ${data2.weather[0].description}`;
card.appendChild(description)


  })
  
  
})




col.appendChild(card)
}


});


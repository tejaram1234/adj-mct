const search = document.getElementById("search")
const details = document.getElementById("deatils")
console.log(search.value)
const APIkey = `b5285af1e2458d9a16c5814408a8b28e`
async function func(){
    console.log()
    const city= search.value
    console.log(city)
    const  Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5285af1e2458d9a16c5814408a8b28e&units=metric`)
    console.log(Response);
    const data= await Response.json()
    console.log(data)
    details.innerHTML=`<div class="name">
    <h3>Weather of  <span>${data.name}</span></h3>
</div>
<div class="weather">
    <p>Sky Conditions: <span><a>${data.weather[0].description}</a></span></p>
    <p><img src=${data.weather[0].icon}></p>
    <p>Temperature:<span> <a>${data.main.temp}°C</a><span></p>
    <p>Humidity:<span> <a>${data.main.humidity}g/m3</a></span></p>
    <p>Wind Speed: <span><a>${data.wind.speed} km/h </a></span></p>
</div>`
}
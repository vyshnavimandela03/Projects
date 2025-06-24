let SearchBar=document.getElementById("searchbox")
let SearchButton=document.getElementById("searchbutton")
let City=document.getElementById("cityname")
let Temp=document.getElementById("temp")
let Sky=document.getElementById("sky")
let Wind=document.getElementById("wind")

SearchButton.addEventListener('click',()=>{
    let name=SearchBar.value;
    SearchWeather(name)
})

SearchWeather=(name)=>{
   fetch("https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=276fab58d7d5220a18a026692b231db0&units=metric")
   .then((res)=>{
    console.log(res)
    return res.json()
   })
   .then((data)=>{
    updatepage(data)
   })
   .catch((err)=>{
    console.log(err)
   })
}
let updatepage=(data)=>{
    console.log(data)
    let weatherData=data;
    let temperature=weatherData.main.temp;
    let Nameofcity=weatherData.name;
    let Clouds=weatherData.weather[0].description;
    let Speed=weatherData.wind.speed;

    Temp.innerHTML=temperature;
    City.innerHTML=Nameofcity;
    Sky.innerHTML=Clouds;
    Wind.innerHTML="Wind Speed:"+Speed+"m/s";


}
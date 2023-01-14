let para=document.getElementById('para');
let info=document.getElementById('weather');
let Loc=document.getElementById('Location');
let latitude=document.getElementById('lat');
let longitude=document.getElementById('lon');
let time=document.getElementById('timezone');
let windspeed=document.getElementById('windspeed');
let pressure=document.getElementById('pressure');
let humidity=document.getElementById('humidity');
let winddirection=document.getElementById('winddirection');
let uvindex=document.getElementById('uvindex');
let feelslike=document.getElementById('feelslike');
let map=document.getElementById('map');
let lati=document.getElementById('lati')
let longi=document.getElementById('longi')
function loc() {
    
    fetch("https://api.ipgeolocation.io/ipgeo?apiKey=46c348c7727f4a16bd342bd8a899c791")
        .then(res => res.json()).then(res => {
            const lat = res.latitude;
            const lon = res.longitude;
            console.log(lat, lon)
            map.innerHTML=`<iframe src="https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed" width="1420" height="655" frameborder="0" style="border:0"></iframe>`
         

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e0f096e85b328c18a32161d06a916260`;
            fetch(url).then(res => res.json()).then(data=> {            
                Loc.innerText="Location : "+ JSON.stringify(data.sys.country)
                latitude.innerText="Lattitude : "+ JSON.stringify(data.coord.lat)
                lati.innerText="Lat: "+ JSON.stringify(data.coord.lat)
                longi.innerText="Lon : "+ JSON.stringify(data.coord.lon)
                longitude.innerText="Longitude : "+ JSON.stringify(data.coord.lon)
                time.innerText="Timezone : "+ JSON.stringify(data.timezone)
                windspeed.innerText="Windspeed : "+ JSON.stringify(data.wind.speed)
                pressure.innerText="Pressure : "+ JSON.stringify(data.main.pressure)
                humidity.innerText="Humidity : "+ JSON.stringify(data.main.humidity)
                winddirection.innerText="Wind direction : "+ JSON.stringify(data.wind.deg)
                uvindex.innerText="UV index : "+ JSON.stringify(data.uvindex)
                feelslike.innerText="Feelslike : "+ JSON.stringify(data.main.feels_like)}
                )


            
            
            
            
            }
                
                
                )
            
        }
        loc();
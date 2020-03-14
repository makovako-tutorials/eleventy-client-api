

function success(pos){
    var crd = pos.coords;
    const url = `/.netlify/functions/weatherapi?lat=${crd.latitude}&lon=${crd.longitude}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').textContent = data.name
            document.getElementById('temp').innerText = data.main.temp + '°C'
            document.getElementById('main').innerText = data.weather[0].main
            document.getElementById('desc').innerText = data.weather[0].description
            document.getElementById('weather').classList.remove('hidden')
        })
    
}

function error(err){
    console.log(err.message);
}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error)
}
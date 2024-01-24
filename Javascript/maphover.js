async function getData(place){
    const url = `https://covid-api.com/api/reports?date=2020-03-14&q=${place}%20Beijing&iso=CHN&region_name=${place}`

    const res = await fetch(url)
    data = await res.json()
    confirmeddeaths = data.confirmed
    console.log(confirmeddeaths)
    recovered = data.recovered
    fatalrate = data.fatality_rate

    document.getElementById("time").innerText = `${place}: \t Confirmed Deaths: ${confirmeddeaths} People Recovered: ${recovered} Fatality Rate: ${fatalrate}}`
}

document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("mouseover", function(){
        window.onmousemove = function(j){
            x=j.clientX
            y=j.clientY
            document.getElementById("name").style.top=y-20+"px"
            document.getElementById("name").style.left=x-20+"px"
        }
        e.style.fill = "pink"
        document.getElementById("namep").innerText = e.id
        document.getElementById("name").style.opacity=1
    })
    e.addEventListener("mouseleave",function(){
        e.style.fill = "#ececec"
        document.getElementById("name").style.opacity=0
        
    })
})
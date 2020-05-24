

document.getElementById("button").addEventListener("click", ()=>{
    axios.get("https://rickandmortyapi.com/api/character/52")
.then(response=>{
    console.log(response)
    for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h3")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
rick.textContent = Object.values(response.data)[i].name
         }
       }
})})
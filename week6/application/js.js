axios.get("https://rickandmortyapi.com/api/character/61")
.then(response=>{
    // var rickCreated = document.createElement("h1")
    // document.body.appendChild(rickCreated)
    // rickCreated.textContent = Object.values(response.data)[0]

    //     var rickEpisode = document.createElement("h2")
    // document.body.appendChild(rickEpisode)
    // rickEpisode.textContent = Object.values(response.data)[1]

    //     var rickGender = document.createElement("h3")
    // document.body.appendChild(rickGender)
    // rickGender.textContent =Object.values(response.data)[2]

    //     var rickId = document.createElement("h4")
    // document.body.appendChild(rickId)
    // rickId.textContent = Object.values(response.data)[3]

    //     var rickImage = document.createElement("h5")
    // document.body.appendChild(rickImage)
    // rickImage.textContent = Object.values(response.data)[4]

    //     var rickLocation = document.createElement("h6")
    // document.body.appendChild(rickLocation)
    // rickLocation.textContent = Object.values(response.data)[5]

    //     var rickName = document.createElement("h1")
    // document.body.appendChild(rickName)
    // rickName.textContent = Object.values(response.data)[6]

    //     var rickOrigin = document.createElement("h2")
    // document.body.appendChild(rickOrigin)
    // rickOrigin.textContent = Object.values(response.data)[7]

    //      var rickSpecies = document.createElement("h3")
    // document.body.appendChild(rickSpecies)
    // rickSpecies.textContent = Object.values(response.data)[8]

    //     var rickStatus = document.createElement("h4")
    // document.body.appendChild(rickStatus)
    // rickStatus.textContent = Object.values(response.data)[9]

    //     var rickType = document.createElement("h4")
    // document.body.appendChild(rickType)
    // rickType.textContent = Object.values(response.data)[10]

    //     var rickUrl = document.createElement("h4")
    // document.body.appendChild(rickUrl)
    // rickUrl.textContent = Object.values(response.data)[11]

       for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h3")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
rick.textContent = Object.values(response.data)[i].name
         }
       }
       

    console.log(Object.values(response.data))
})
axios.get("https://rickandmortyapi.com/api/character/332")     
.then(response=>{
    for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h4")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
            rick.textContent = Object.values(response.data)[i].name
                     }
       }
        
         
        
    console.log(response.data)
})
axios.get("https://rickandmortyapi.com/api/character/201")
.then(response=>{
    for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h5")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
            rick.textContent = Object.values(response.data)[i].name
                     }
       }
        
    console.log(response.data)
})


   

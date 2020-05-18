axios.get("https://api.vschool.io/caseychester/todo")
.then(response=>{
    // console.log(response.data[0])
    for(let i = 0; i < response.data.length; i++){
        const object = response.data[i]
        console.log(object)
    
        const section = document.createElement('section')
        section.id = object._id
        document.body.appendChild(section)
        const h1 = document.createElement('h1')
        h1.textContent = object.title
       section.appendChild(h1)
        const h2 = document.createElement('h2')
        h2.textContent = object.description
       section.appendChild(h2)
       const button = document.createElement('button')
        button.id = object._id
       section.appendChild(button)
       button.addEventListener("click", (event)=>{
           console.log(event.currentTarget)
           console.log(document.getElementById(event.currentTarget.id))
           var toBeDeleted = document.getElementById(event.currentTarget.id)
           axios.delete("https://api.vschool.io/caseychester/todo/" + event.currentTarget.id).then(response =>{ 
              
           toBeDeleted.remove()})
       })
       
    }



})
.catch()
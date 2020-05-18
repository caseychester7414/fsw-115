var person = { 
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.py4e.com/api/planets/1/",
	"films": [
		"https://swapi.py4e.com/api/films/2/",
		"https://swapi.py4e.com/api/films/6/",
		"https://swapi.py4e.com/api/films/3/",
		"https://swapi.py4e.com/api/films/1/",
		"https://swapi.py4e.com/api/films/7/"
	],
	"species": [
		"https://swapi.py4e.com/api/species/1/"
	],
	"vehicles": [
		"https://swapi.py4e.com/api/vehicles/14/",
		"https://swapi.py4e.com/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.py4e.com/api/starships/12/",
		"https://swapi.py4e.com/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.py4e.com/api/people/1/"
}
console.log(person)
for (i = 0; i < Object.keys(person).length; i++){
    var heading1 = document.createElement("h1")
    document.body.append(heading1)
    heading1.textContent = Object.keys(person)[i]

    var heading2 = document.createElement("p")
    document.body.append(heading2)
    heading2.innerHTML = "<Li>" + Object.values(person)[i]

    heading1.style.display = "inline"
    heading2.style.display = "inline"
    
    
}
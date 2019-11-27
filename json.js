const data = [ {
 	team: "Nationals",
 	lastWin: "October",
 	roster: [ 
 		{
	 		firstName: "Max",
	 		lastName: "Scherzer",
 		},
 		{
	 		firstName: "John",
	 		lastName: "Doe",
 		},
 	]
 }, {
 	team: "Red Sox",
 	lastWin: "October",
 	roster: [ 
 		{
	 		firstName: "David",
	 		lastName: "Price",
 		},
 		{
	 		firstName: "Chris",
	 		lastName: "Sale",
 		},
 	]
 }]

function extractJson(data) {
  let returnList = []
  for(var i = 0; i < data.length; i++) {
    team = data[i].team
    for (var j = 0; j < (data[i].roster.length); j++) {
      let player = data[i].roster[j].firstName + " " + data[i].roster[j].lastName;
      returnObj = {name: player, team: team}
      returnList.push(returnObj)
    }
  }
  console.log(returnList)
  return returnList
}
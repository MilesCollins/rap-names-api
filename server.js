const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
   '21 savage':{ 
    'birthname': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
    'age':29
   },
   'Chance the Rapper':{
    'age':29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
   },
   'unknown':{
    'age':29,
    'birthName': 'Unknown',
    'birthLocation': 'Unknown'
   }

}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const rapperName = request.params.name.toLowerCase()
    if ( rappers[rapperName] ){
        response.json(rappers[rapperName])
    } else{
        response.json(rappers['unknown'])
    }
    response.json(rappers)
})
app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})

const express = require("express");
const router = express.Router();
const fs = require('fs');


// -----> DINO INDEX ROUTE<-------  
router.get('/', function(req, res) {
    // take the text from dinosaurs.json and store it in a variable
    let dinosaurs =fs.readFileSync('./dinosaurs.json') // convert the string to an array
    let dinoData = JSON.parse(dinosaurs)
    //handle a query string if there is one
    let nameFilter = req.query.nameFilter
    console.log(nameFilter)
    if(nameFilter) { 
        console.log("name filter is truthy")
        //reassign dinoData to only be an
        //array of dinos whose name matches the query string 
        //name(and make it ignore case)
        dinoData = dinoData.filter((dino)=>{
        return dino.name.toLowerCase() === nameFilter.toLowerCase()
        })
    }

    res.render('dinosaurs/index', {dino: dinoData})
})

//---- NEW ROUTE---//
router.get('/new', (req, res)=> {
    res.render('dinosaurs/new')
})

//------DINO SHOW ROUTE <-------
router.get('/:idx', (req,res)=>{
    let dino =fs.readFileSync('./dinosaurs.json') 
    let dinoData = JSON.parse(dino)
    //get array indext from url parameter
    let dinoIndex = req.params.idx
    console.log(dinoData[dinoIndex])
    res.render('dinosaurs/show', {dino: dinoData[dinoIndex], dinoId: dinoIndex})
})


//<-----DINO POST ROUTE <-----
router.post('/', (req,res)=>{
    let dino =fs.readFileSync('./dinosaurs.json') 
    let dinoData = JSON.parse(dino)
    dinoData.push(req.body)//push the new dino to the array
    console.log(req.body)
    //save the new dinoData array to the dinosaurs.json file
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    //redirct so the browers actually goes somewhere after the POST form
    res.redirect('/dinosaurs')
})

module.exports = router;
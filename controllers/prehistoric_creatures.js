const express = require("express");
const router = express.Router();
const fs = require('fs');




// ----PREHISTORIC INDEX ROUTE ----//
router.get('/', function(req, res) {
    let creatures =fs.readFileSync('./prehistoric_creatures.json') 
    let creaturesData = JSON.parse(creatures)
    let typeFilter = req.query.typeFilter
    if(typeFilter) { 
        creaturesData = creaturesData.filter((creatures)=>{
        return creatures.type.toLowerCase() === typeFilter.toLowerCase()
        })
    }
    res.render('prehistoric_creatures/index', {creatures: creaturesData})
})


//---- PREHISTORIC NEW ROUTE---//
router.get('/new', (req, res)=> {
    res.render("prehistoric_creatures/new")
})

// //------PREHISTORIC SHOW ROUTE <-------
router.get('/:idx', (req,res)=>{
    let creatures =fs.readFileSync('./prehistoric_creatures.json') 
    let creaturesData = JSON.parse(creatures)
    //get array indext from url parameter
    let creaturesIndex = req.params.idx
    console.log(creaturesData[creaturesIndex])
    res.render('prehistoric_creatures/show', {creatures: creaturesData[creaturesIndex], creaturesId: creaturesIndex})
})



//<-----PREHISTORIC CREATURES POST ROUTE <-----
router.post('/', (req,res)=>{
    let creatures =fs.readFileSync('./prehistoric_creatures.json') 
    let creaturesData = JSON.parse(creatures)
    creaturesData.push(req.body)//push the new dino to the array
    console.log(req.body)
    //save the new dinoData array to the dinosaurs.json file
    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(creaturesData))
    //redirct so the browers actually goes somewhere after the POST form
    res.redirect('/prehistoric_creatures')
})

module.exports=router;
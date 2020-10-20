const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs')
const dinosaurs = require("./controllers/dinosaurs")
const prehistoric_creatures= require ("./controllers/prehistoric_creatures")

app.set('view engine', 'ejs')
app.use(ejsLayouts)
//body parser middleware (it makes req.body work)
app.use(express.urlencoded({extended:false}))
app.use("/dinosaurs", dinosaurs)
app.use("/prehistoric_creatures", prehistoric_creatures)



     
// // -----> DINO INDEX ROUTE<-------  
// app.get('/dinosaurs', function(req, res) {
//     // take the text from dinosaurs.json and store it in a variable
//     let dinosaurs =fs.readFileSync('./dinosaurs.json') // convert the string to an array
//     let dinoData = JSON.parse(dinosaurs)
//     //handle a query string if there is one
//     let nameFilter = req.query.nameFilter
//     console.log(nameFilter)
//     if(nameFilter) { 
//         console.log("name filter is truthy")
//         //reassign dinoData to only be an
//         //array of dinos whose name matches the query string 
//         //name(and make it ignore case)
//         dinoData = dinoData.filter((dino)=>{
//         return dino.name.toLowerCase() === nameFilter.toLowerCase()
//         })
//     }

//     res.render('dinosaurs/index', {dino: dinoData})
// })

// // //---- NEW ROUTE---//
// // app.get('/dinosaurs/new', (req, res)=> {
// //     res.render('new')
// // })

// // //------DINO SHOW ROUTE <-------
// // app.get('/dinosaurs/:idx', (req,res)=>{
// //     let dino =fs.readFileSync('./dinosaurs.json') 
// //     let dinoData = JSON.parse(dino)

// //     //get array indext from url parameter
// //     let dinoIndex = req.params.idx
// //     console.log(dinoData[dinoIndex])
// //     res.render('show', {dino: dinoData[dinoIndex], dinoId: dinoIndex})
// // })

// //<-----DINO POST ROUTE <-----
// app.post('/dinosaurs', (req,res)=>{
//     let dino =fs.readFileSync('./dinosaurs.json') 
//     let dinoData = JSON.parse(dino)
//     dinoData.push(req.body)//push the new dino to the array
//     console.log(req.body)
//     //save the new dinoData array to the dinosaurs.json file
//     fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
//     //redirct so the browers actually goes somewhere after the POST form
//     res.redirect('/dinosaurs')
// })


// // // ----PREHISTORIC INDEX ROUTE ----//
// // app.get('/prehistoric_creatures', function(req, res) {
// //     let creatures =fs.readFileSync('./prehistoric_creatures.json') 
// //     let creaturesData = JSON.parse(creatures)
// //     let typeFilter = req.query.typeFilter
// //     if(typeFilter) { 
// //         creaturesData = creaturesData.filter((creatures)=>{
// //         return creatures.type.toLowerCase() === typeFilter.toLowerCase()
// //         })
// //     }
// //     res.render('prehistoric_creatures/index', {creatures: creaturesData})
// // })


// // //---- PREHISTORIC NEW ROUTE---//
// // app.get('/prehistoric_creatures', (req, res)=> {
// //     res.render('new')
// // })

// // //<-----PREHISTORIC CREATURES POST ROUTE <-----
// // app.post('/prehistoric_creatures', (req,res)=>{
// //     let creatures =fs.readFileSync('./prehistoric_creatures.json') 
// //     let creaturesData = JSON.parse(creatures)
// //     creaturesData.push(req.body)//push the new dino to the array
// //     console.log(req.body)
// //     //save the new dinoData array to the dinosaurs.json file
// //     fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(creaturesData))
// //     //redirct so the browers actually goes somewhere after the POST form
// //     res.redirect('/prehistoric_creatures')
// // })



//-----LISTEN-----//
app.listen(8000, ()=> {
    console.log ('Youre listening')
})
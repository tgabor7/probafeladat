const { spawn, execFile } = require("child_process")
const express = require('express')
const { kill } = require("process")
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello API')
})

const validateData = (data)=>{

}

const processData = (input,res)=>{
    execFile("./lexunit-exercise-linux-amd64", [JSON.stringify(input.data), input.threshold], (err, data)=>{
        res.send(data)
    });
}

app.post('/', (req,res)=>{
    processData(req.body,res)
})

app.listen(port, ()=>{
    console.log("App listenning on: http://localhost:" + port)
})

// var fun =function(){
//     console.log("fun() start");
//     exec('./lexunit-exercise-linux-amd64 "$(cat test_groups.json)" 1.0', function(err, data) {  
//          console.log(err)
//          console.log(data.toString());        
//      });  
//  }
//  fun();
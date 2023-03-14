const express = require('express')
const app = express()

const path = require('path')
const serverIP = process.env.SERVER_IP;

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

app.get('/demo', (req, res)=>{ 
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

port = 8080

app.listen(port, ()=>{
    console.log(`server at port ${port}`,
    console.log(serverIP)
    )
})


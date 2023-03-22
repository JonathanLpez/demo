const express = require('express')
const app = express()

const path = require('path')

app.use(express.static(path.resolve(__dirname, '../client/public')))

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

app.get('/demo', (req, res)=>{ 
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
})

port = 8080

app.listen(port, ()=>{
    console.log(`server at port ${port}`)
})

